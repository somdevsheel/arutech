"use client";

export default function FloatingTab() {
  return (
    <a
      href="/"
      onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold tracking-widest uppercase py-3 px-4 shadow-lg transition-all hover:shadow-orange-300/50 hover:px-5"
      style={{
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        borderRadius: "8px 0 0 8px",
      }}
      aria-label="Talk to us"
    >
      Talk to Us
    </a>
  );
}
