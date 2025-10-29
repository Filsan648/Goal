import IMG1 from "../assets/HERO/IMG11.jpg"
import IMG2 from "../assets/HERO/IMG12.jpg"
import IMG3 from "../assets/HERO/IMG13.jpg"
function Hero() {
  return (
    <div className=" text-black   relative p-2 pt-11">
 
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl  rounded-md   ">
     <span className="" >   Transformez vos données en décisions instantanées avec <span className="text-[#412B6B]">  GOAL
          </span> </span>
        <br />
      </h1>
      <h2 className="inline-block  shadow-md shadow-black m-6 p-3 sm:p-4 rounded-xl bg-white/80 backdrop-blur-md text-sm sm:text-base md:text-lg ">
        <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#412B6B] shadow-lg shadow-black m-2"></span>
        Book a requirement
      </h2>

<div className="flex flex-row flex-wrap justify-center items-center  gap-4">
  <img src={IMG2} className="w-1/3 sm:w-1/4 md:w-1/5 rounded-lg shadow-lg" alt="Image 1" />
  <img src={IMG1} className="w-2/3 sm:w-2/4 md:w-2/5 rounded-lg shadow-lg" alt="Image 2" />
  <img src={IMG3} className="w-1/3 sm:w-1/4 md:w-1/5 rounded-lg shadow-lg" alt="Image 3" />
</div>
    </div>
  );
}

export default Hero;
