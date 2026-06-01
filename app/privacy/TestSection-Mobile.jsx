"use client";

const items = [
  { image: "/stm-waves.webp", text: "Strategy begins with insight." },
  { image: "/stm-works.webp", text: "Design creates connection." },
  { image: "/stm-waves.webp", text: "Technology powers execution." },
  { image: "/stm-works.webp", text: "Data drives optimization." },
];

export default function ScrollMobile() {
  return (
    <section className="bg-[#F6F8F7] px-6 py-16 space-y-16">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col gap-6">
          <img
            src={item.image}
            alt={item.text}
            loading="lazy"
            width={1200}
            height={675}
            className="w-full rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Step {i + 1}
            </h2>
            <p className="text-gray-600">{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}