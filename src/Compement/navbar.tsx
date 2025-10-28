 
 import Logo from "../assets/goal.png"
 function Navbar(){

    return (
        <div className=" flex  justify-between items-center p-5 ">
          <img src={Logo} alt="logo  " className=" w-36 h-14"/>
              <div> </div>
     <div className="flex flex-row gap-14">
        <nav>
           About
        </nav>
         <nav>
           price
        </nav>
         <nav>
           Contact
        </nav>
        </div>
        </div>
    )
 }
 export default Navbar;