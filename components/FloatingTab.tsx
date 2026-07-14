"use client";

export default function FloatingTab() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile: bottom-left pill (ChatWidget lives bottom-right, no conflict) */}
      <a
        href="/"
        onClick={handleClick}
        className="lg:hidden fixed bottom-4 left-3 z-50 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-xs font-bold uppercase tracking-wide px-4 py-2.5 rounded-full shadow-lg shadow-orange-500/30 transition-all"
        aria-label="Talk to us"
      >
        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Talk to Us
      </a>

      {/* Desktop: vertical side tab */}
      <a
        href="/"
        onClick={handleClick}
        className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold tracking-widest uppercase py-3 px-4 shadow-lg transition-all hover:shadow-orange-300/50 hover:px-5"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          borderRadius: "8px 0 0 8px",
        }}
        aria-label="Talk to us"
      >
        Talk to Us
      </a>
    </>
  );
}
