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
                            <Text className="md:text-[18px] sm:text-[16px] text-[14px] font-[400] font-Poppins mxl:text-start text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero incidunt nobis asperiores voluptas assumenda?</Text>
                            <Text className="md:text-[18px] sm:text-[16px] text-[14px] font-[300] font-Poppins w-[100%] mxl:text-start text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quisquam, explicabo fugiat labore ullam quos sit. Dolores deleniti animi facilis neque? Quae cum omnis similique numquam quibusdam eaque doloremque maxime!</Text>
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