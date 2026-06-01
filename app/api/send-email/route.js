import nodemailer from "nodemailer";

// Ensure this route always runs on Node (nodemailer is not edge-compatible).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Always return a real JSON Response with an explicit Content-Type.
// This guarantees the client's res.json() never sees a non-JSON body.
function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

// Coerce any thrown value into a plain string so it serializes cleanly.
function errorToString(err) {
  if (err == null) return "Unknown error";
  if (typeof err === "string") return err;
  if (err instanceof Error && typeof err.message === "string") return err.message;
  try {
    return String(err?.message ?? err);
  } catch {
    return "Unserializable error";
  }
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

export async function POST(req) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return jsonResponse(
        { success: false, error: "Email service is not configured (missing EMAIL_USER/EMAIL_PASS)." },
        500
      );
    }

    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const file = formData.get("file");
    const motLetterFile = formData.get("motivationLetter");

    if (file && file.size > MAX_FILE_SIZE) {
      return jsonResponse(
        { success: false, error: "Your CV exceeds the 5 MB file size limit. Please upload a smaller file." },
        413
      );
    }
    if (motLetterFile && motLetterFile.size > MAX_FILE_SIZE) {
      return jsonResponse(
        { success: false, error: "Your Motivation Letter exceeds the 5 MB file size limit. Please upload a smaller file." },
        413
      );
    }

    if (!name || !email) {
      return jsonResponse(
        { success: false, error: "Missing required fields: name and email." },
        400
      );
    }

    const attachments = [];

    if (file && typeof file.arrayBuffer === "function" && file.size > 0) {
      const bytes = await file.arrayBuffer();
      attachments.push({
        filename: file.name || "cv",
        content: Buffer.from(bytes),
      });
    }

    if (motLetterFile && typeof motLetterFile.arrayBuffer === "function" && motLetterFile.size > 0) {
      const bytes = await motLetterFile.arrayBuffer();
      attachments.push({
        filename: motLetterFile.name || "motivation-letter",
        content: Buffer.from(bytes),
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      // Gmail SMTP requires the authenticated address as the envelope sender.
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Mail to HR from ${String(name)}`,
      replyTo: String(email),
      text: typeof message === "string" ? message : String(message ?? ""),
      attachments,
    });

    return jsonResponse({ success: true });
  } catch (error) {
    console.error("ATTACHMENT ERROR:", error);
    return jsonResponse(
      { success: false, error: errorToString(error) },
      500
    );
  }
}
