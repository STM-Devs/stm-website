import { cx } from "../Data";

export function Field({ label, as = "input", className, ...props }) {
  const Comp = as;
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[#414042]">{label}</span>
      <Comp
        className={cx(
          "w-full rounded-2xl border border-[#E6EBE7] bg-white px-4 py-3 text-sm text-[#414042] outline-none transition placeholder:text-[#9AA19B] focus:border-[#8DC53E] focus:ring-4 focus:ring-[#8DC53E]/15",
          as === "textarea" ? "min-h-[140px] resize-y" : "h-[52px]",
          className
        )}
        {...props}
      />
    </label>
  );
}
