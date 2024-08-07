import { Box, Text, Stack, Image } from "@chakra-ui/react";
import JoinImg1 from "../../assets/images/Events/event22.jpg"
import JoinImg2 from "../../assets/images/Events/event21.jpg"
import Button from "../Button/Button";
const JoinUs = () => {
    return ( 
        <>
        <Box className="xsm:mt-[10%] xsm:mb-[8%] mb-[14%] mt-[20%]"> 
         <Box bg="#D4EAF4" className="mxl:py-[100px] py-[70px] sm:px-[100px] px-[20px]"> 
            <Box className="flex items-center gap-[8%] mxl:flex-row flex-col">
                    <Box className="mxl:w-[180%]" id="imgcont2">
                    <Image src={JoinImg1} className="sm:h-[70vh] h-[50vh] rounded-[10px]"/>
                    </Box>
                <Box>
                    <Stack className="flex mxl:justify-start mxl:items-start justify-center items-center mxl:mb-[0] mt-[40px]">
                    <Text className="md:text-[40px] sm:text-[35px] text-[25px] font-[700] font-Poppins mxl:text-start text-center">Join with Us</Text>
                    <Text className="md:text-[18px] sm:text-[16px] text-[14px] font-[300] font-Poppins w-[100%] mxl:text-start text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error sunt corporis facilis quibusdam saepe quod consequuntur vitae minima necessitatibus. Ex veritatis molestias cupiditate earum quod incidunt optio fuga.</Text>
                    <Button text="Join Now" className="text-center w-[50%] xsmm:w-[30%] py-[10px] text-white rounded-[20px] text-[16px] font-[500] font-Poppins mt-[25px]"/>
                    </Stack>
                </Box>
                
            </Box>
            </Box>
            </Box>
        </>
     );
}
 
export default JoinUs;