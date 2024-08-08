import { Box, Text, Stack, Divider, Image } from "@chakra-ui/react";
import AboutImg from "../../assets/images/Events/event18.jpg";
import Button from "../Button/Button";
import Achievements from "../Achievements/Achievement";
const AboutUs = () => {
    return ( 
        <>
        <Box className="xsm:my-[6%] my-[13%]">
            <Box bg="#D4EAF4" className="mxl:py-[100px] py-[70px] sm:px-[100px] px-[20px]"> 
                <Box className="flex items-center  gap-[10%] mxl:flex-row flex-col-reverse ">
                    <Box className="mxl:w-[180%]" id="imgcont">
                    <Image src={AboutImg} className="sm:h-[70vh] h-[50vh] rounded-[10px]"/>
                    </Box>
                    <Box>
                        <Stack spacing={4} className="flex mxl:justify-start mxl:items-start justify-center items-center mxl:mb-[0] mb-[40px]">
                            <Text className="md:text-[40px] sm:text-[35px] text-[25px] font-[700] font-Poppins mxl:text-start text-center">Who we are?</Text>
                            <Text className="md:text-[18px] sm:text-[16px] text-[14px] font-[400] font-Poppins mxl:text-start text-center">First Floor Foundation is a hundred percent indigenous Non Governmental Organization  ( NGO ) that focuses on promoting the welfare, rights, and empowerment of women and children in Nigeria</Text>
                            <Text className="md:text-[18px] sm:text-[16px] text-[14px] font-[300] font-Poppins w-[100%] mxl:text-start text-center">Through our dedicated efforts, we provide essential resources, advocate for the rights of the vulnerable, and create opportunities for women and children to thrive in a supportive and nurturing environment.</Text>
                        </Stack>
                    </Box>
                </Box>
            </Box>
            <Achievements />
            </Box>
        </>
     );
}
 
export default AboutUs;