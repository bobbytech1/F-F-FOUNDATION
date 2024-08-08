import { Box, Text, Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom"
import Slider from "react-slick";
import Bgimage1 from "../../assets/images/Events/event1.jpg";
import Bgimage2 from "../../assets/images/Events/event2.jpg";
import Button from "../Button/Button";
import Bgimage3 from "../../assets/images/Events/event4.jpg";
import useOrientation from "../../hooks/useOrientation";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const isLandscape = useOrientation();
  const images = [Bgimage1, Bgimage2, Bgimage3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <>
    <Box>
      <Box id="hero" className="relative w-[100%] h-[100vh] xsl:block hidden overflow-hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box key={index} height="100vh">
              <Image
                src={image}
                alt={`slide ${index}`}
                objectFit="cover"
                height="100%"
                width="100%"
                
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div> {/* Overlay */}
            </Box>
          ))}
        </Slider>
        <Box className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-[40px] px-[20px]">
       <motion.div
       initial={{ y: 60, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{ duration: 4 }}
       >
        <Stack spacing={2} className="text-white font-Poppins flex md:justify-start md:items-start justify-center items-center">
            <Text className="msd:text-[55px] xsm:text-[50px] text-[35px] font-[600] w-[100%] text-center md:text-start md:w-[60%]">Join Us in Empowering Nigeria, Be a Part of the Change!</Text>
            <Text className="text-[20px] font-[300] w-[100%] md:w-[40%] text-center md:text-start">Your support helps us provide essential resources, empower communities, and create lasting impact across Nigeria. Together, we can bring hope and build a brighter future for those in need.</Text>
            <Box className="flex items-center md:gap-[30px] gap-[20px] md:flex-row flex-col mt-[10px]">
                <Button text="Get Involved" to="getinvolved" className="px-[50px] py-[10px] hover:px-[48px] hover:py-[8px] text-white rounded-[20px] hover:bg-transparent hover:border-[2px] hover:border-customorange"/>
                <Link to="/about" className="border-[2px] border-customorange px-[48px] py-[8px] rounded-[20px] hover:bg-customorange">Learn More</Link>
            </Box>
            
        </Stack>
       </motion.div>
      
        </Box>
        
      </Box>
      <div className="bg-[#D4EAF4] hero3">
      <Stack spacing={2} className="text-black font-Poppins flex md:justify-start md:items-start justify-center items-center mt-[25%] py-[10%]">
            <Text className="msd:text-[55px] xsm:text-[50px] text-[35px] font-[600] w-[100%] text-center md:text-start md:w-[60%]">Support First Floor Foundation to Help Nigeria and also help the country</Text>
            <Text className="text-[20px] font-[300] w-[100%] md:w-[40%] text-center md:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti deserunt laborum error porro sapiente maxime atque, repellendus aut optio!</Text>
            <Box className="flex items-center md:gap-[30px] gap-[20px] md:flex-row flex-col mt-[10px]">
                <Button text="Get Involved" className="px-[50px] py-[10px] hover:px-[48px] hover:py-[8px] text-black rounded-[20px] hover:bg-transparent hover:border-[2px] hover:border-customorange"/>
                <Link to="#" className="border-[2px] border-customorange px-[48px] py-[8px] rounded-[20px] hover:bg-customorange">Learn More</Link>
            </Box>
            
        </Stack>
        </div>
      </Box>
    </>
  );
};

export default Hero;
