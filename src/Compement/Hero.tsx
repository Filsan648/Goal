function Hero() {
  return (
    <div className="flex flex-col justify-center items-center h-screen relative text-center px-4">
      {/* Titre principal */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
        Achieve more
        <br />
        <span className="mt-6 inline-block">
          with{" "}
          <span className="bg-[#412B6B] p-2 rounded-md shadow-lg shadow-[#412B6B] text-white">
            GOAL
          </span>
        </span>
      </h1>

      {/* Sous-titre / bouton */}
      <h2 className="absolute bottom-10 sm:bottom-16 md:bottom-20 shadow-md shadow-black m-6 p-3 sm:p-4 rounded-xl bg-white/80 backdrop-blur-md text-sm sm:text-base md:text-lg">
        <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#412B6B] shadow-lg shadow-black m-2"></span>
        Book a requirement
      </h2>
    </div>
  );
}

export default Hero;
