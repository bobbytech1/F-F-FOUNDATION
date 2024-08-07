import { Box, Text, Stack, Input, Image} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import Logo from "../../assets/images/logoimg1.png";
import LogoName from "../../assets/images/logoname1.png";
import Copyright from "./Copyright";
import Button from "../../components/Button/Button";

const Footer = () => {
    return ( 
        <>
            <Box className="bg-[#9d6932] xsm:px-[4%] px-[5%] pt-[6%] pb-[2%]">
                <Box className="grid mxl:grid-cols-4 md:grid-cols-3 xsm:grid-cols-2 grid-cols-1 gap-[40px]">
                    <Stack spacing={7} className="w-[100%]">
                        <Box className="flex items-center gap-[10px]">
                            <Link to="/">
                            <Image src={Logo} className="h-[10vh]"/>
                            </Link>
                            <Link>
                            <Image src={LogoName} className="h-[4vh]"/>
                            </Link>
                        </Box>
                        <Text className="text-[16px] font-Poppins font-[300] text-[white]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magnam quidem deleniti eius ratione neque. Pariatur, veritatis.</Text>
                        <Box className="flex items-center gap-[20px]">
                            <Link><FaFacebook size="22px" color="white"/></Link>
                            <Link><FaInstagram size="22px" color="white"/></Link>
                            <Link><FaLinkedinIn size="22px" color="white"/></Link>
                            <Link><BsTwitterX size="22px" color="white"/></Link>
                        </Box>
                    </Stack>
                    <Stack spacing={7}>
                        <Text className="text-[20px] text-[white] font-Poppins font-[700]">Navigation</Text>
                        <Stack spacing={4}>
                            <Link className="xsl:w-[50%] w-[60%]" to="/"><Text className="text-[16px] font-Poppins font-[300] text-[white]">Home</Text></Link>
                            <Link className="xsl:w-[50%] w-[60%]" to="/about"><Text className="text-[16px] font-Poppins font-[300] text-[white]">About Us</Text></Link>
                            <Link className="xsl:w-[50%] w-[60%]" to="/news"><Text className="text-[16px] font-Poppins font-[300] text-[white]">News</Text></Link>
                            <Link className="xsl:w-[50%] w-[60%]" to="/getinvolved"><Text className="text-[16px] font-Poppins font-[300] text-[white]">Get Involved</Text></Link>
                            <Link className="xsl:w-[80%] w-[80%]" to="/programs"><Text className="text-[16px] font-Poppins font-[300] text-[white]">Programs/Projects</Text></Link>
                        </Stack>
                    </Stack>
                    <Stack spacing={7}>
                    <Text className="text-[20px] text-[white] font-Poppins font-[700]">Services</Text>
                        <Stack spacing={4}>
                            <Link to="/programs"><Text className="text-[16px] font-Poppins font-[300] text-[white]">Advocacy and Development</Text></Link>
                            <Link to="/programs"><Text className="text-[16px] font-Poppins font-[300] text-[white]">Education and Empowerment</Text></Link>
                            <Link to="/programs"><Text className="text-[16px] font-Poppins font-[300] text-[white]">Health and Wellbeing</Text></Link>
                            <Link to="/programs"><Text className="text-[16px] font-Poppins font-[300] text-[white]">Support Services</Text></Link>
                            <Link to="/programs"><Text className="text-[16px] font-Poppins font-[300] text-[white]">Legal Assistance</Text></Link>
                        </Stack>
                    </Stack>
                    <Stack spacing={7} className="w-[100%]">
                    <Text className="text-[20px] text-[white] font-Poppins font-[700]">Subscribe to our newsletter</Text>
                        <Stack spacing={4}>
                            <Text className="text-[16px] font-Poppins font-[300] text-[white]">Subscribe our newsletter to get updates about our services and offers.</Text>
                           <input 
                           placeholder="Enter your email"
                          className="font-Poppins placeholder:text-[16px] placeholder:font-[400] placeholder:text-[white] text-white bg-transparent outline-none border-[1px] border-[whitesmoke] px-[20px] py-[15px] rounded-[50px]"
                           />
                           <Button text="SUBMIT" icon={FaArrowRight} className="bg-customorange text-[white] px-[30px] flex gap-[10px] items-center justify-center font-Poppins text-[16px] font-[700] h-[50px] py-[10px] rounded-[50px]" />
                        </Stack>
                    </Stack>
                </Box>
                <Copyright />
            </Box>
        </>
     );
}
 
export default Footer;