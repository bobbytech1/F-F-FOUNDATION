import { Box, Text, Stack, Image } from "@chakra-ui/react";
import MissionImg from "../../assets/images/Events/event10.jpg";

const OurMission = () => {
    return ( 
        <>
            <Box className="xsm:my-[10%] my-[15%]">
            <Box bg="#D4EAF4" className="mxl:py-[100px] py-[70px] sm:px-[100px] px-[20px]"> 
                <Box className="flex items-center  gap-[10%] mxl:flex-row flex-col-reverse ">
                    <Box className="mxl:w-[180%]" id="imgcont">
                    <Image src={MissionImg} className="sm:h-[70vh] h-[50vh] rounded-[10px]"/>
                    </Box>
                    <Box>
                        <Stack spacing={4} className="flex mxl:justify-start mxl:items-start justify-center items-center mxl:mb-[0] mb-[40px]">
                            <Text className="md:text-[40px] sm:text-[35px] text-[25px] font-[700] font-Poppins mxl:text-start text-center">Our Mission</Text>
                            <Text className="md:text-[18px] sm:text-[16px] text-[14px] font-[400] font-Poppins mxl:text-start text-center">Our mission is to empower women and children in Nigeria by providing access to education, healthcare, legal support, and economic opportunities.</Text>
                            <Text className="md:text-[18px] sm:text-[16px] text-[14px] font-[300] font-Poppins w-[100%] mxl:text-start text-center">To empower women and children in Nigeria by providing access to education, healthcare, legal support, and economic opportunities, while advocating for their rights and promoting gender equality through community engagement and sustainable development programs.</Text>
                           
                        </Stack>
                    </Box>
                </Box>
            </Box>
            </Box>
        </>
     );
}
 
export default OurMission;