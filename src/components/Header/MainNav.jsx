import Button from "../Button/Button";
import useNavbar from "../../hooks/useNavbar";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "../../assets/images/logoimg1.png";
import LogoName from "../../assets/images/logoname1.png"
import { Link } from "react-router-dom";

const MainNav = () => {
  const { isOpen, toggleMenu, isFixed } = useNavbar();
  return (
    <>
    <div className="relative">
      <div className={`gen-cont bg-white shadow-md flex items-center justify-between py-[10px] xsm:px-[50px] px-[15px]  ${isFixed? 'fixed z-[1] w-[100%] top-0 animate-slideDown' : 'relative'}`} id="header" position={isFixed ? 'fixed' : 'relative'}>
        <div className="logo flex items-center gap-[10px]">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-[10vh]" />
          </Link>
          <img src={LogoName} alt="" className="h-[4vh]" />
        </div>
        <div className="nav-links font-Poppins hidden mxl:flex">
          <ul className="flex items-center gap-[35px]">
            <Link to="/about">
              <li className="hover:text-customorange">About Us</li>
            </Link>
            <Link to="">
              <li className="hover:text-customorange">News</li>
            </Link>
            <Link to="">
              <li className="hover:text-customorange">Get Involved</li>
            </Link>
            <Link to="">
              <li className="hover:text-customorange">Programs/Projects</li>
            </Link>
            <Button
              text="Donate Now"
              className="px-[25px] py-[10px] text-white rounded-[20px]"
            />
          </ul>
        </div>
        <div className="mobile-nav mxl:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <HiOutlineMenuAlt3 size={25}/>
          </button>
          
        </div>

      </div>
      <div className="mobile-menu ">
        <div className={`mxl:hidden transition-all duration-300 ease-in-out ${isOpen ? 'flex flex-col list-none gap-[16px] z-[-100] slide-down opacity-100 font-Poppins bg-[white] px-[20px] py-[10px] text-[12px] xsm:text-[15px]' : 'hidden' }`}>
          <Link to="/about" className="xsl:w-[20%] w-[30%]">
              <li className="hover:text-customorange">About Us</li>
            </Link>
            <Link to="#" className="xsl:w-[20%] w-[30%]">
              <li className="hover:text-customorange">News</li>
            </Link>
            <Link to="#" className="xsl:w-[30%] w-[40%]">
              <li className="hover:text-customorange">Get Involved</li>
            </Link>
            <Link to="#" className="xsl:w-[20%] w-[30%]">
              <li className="hover:text-customorange">Programs/Projects</li>
            </Link>
            <Button
              text="Donate Now"
              className=" text-center py-[10px] w-[60%] xsl:w-[40%] sm:w-[20%] text-white rounded-[20px]"
            />
        </div>
      </div>
    </div>
      
      
    </>
  );
};

export default MainNav;
