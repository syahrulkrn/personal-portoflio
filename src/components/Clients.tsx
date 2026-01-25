export function Clients() {
  const logos = [
    { name: "Disney", className: "font-serif italic font-bold" },
    { name: "airbnb", className: "font-sans font-bold tracking-tight" },
    { name: "Microsoft", className: "font-sans font-semibold" },
    { name: "duolingo", className: "font-sans font-bold" },
    { name: "NETFLIX", className: "font-sans font-black tracking-wide" },
  ];

  return (
    <footer className="w-full py-12 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <span
              key={logo.name}
              className={`text-xl md:text-2xl text-white ${logo.className}`}
            >
              {logo.name}
            </span>
          ))}
          {/* Duplicate Disney for symmetry in the image if needed, but the image shows: Disney, Airbnb, Microsoft, Duolingo, Netflix, Disney */}
           <span className="text-xl md:text-2xl text-white font-serif italic font-bold">Disney</span>
        </div>
      </div>
    </footer>
  );
}
