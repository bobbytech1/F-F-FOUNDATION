import Button from "../Button/Button";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const TopNav = () => {
    
    return ( 
        <>
           <div className="gen-cont bg-customorange hidden sm:flex items-center justify-between px-[20px] mxl:px-[50px] py-[8px] w-[100%]">
                <div className="contact-info font-Poppins flex items-center md:gap-[20px] gap-[10px] font-[300] text-white">
                <IoIosCall size={20}/>
                    <p className="">+234 (80) 562 38970</p>
                    <p className="border-[#ffffff62] border-r h-[20px]"></p>
                    <p>info@firstroyal.com</p>
                </div>
                <div className="social text-white gap-[20px] flex items-center">
                    <FaFacebook size={18}/>
                    <FaXTwitter size={18}/>
                    <FaLinkedinIn size={18}/>
                    <FaInstagram size={18}/>
                </div>
           </div>
        </>
     );
}
 
export default TopNav;