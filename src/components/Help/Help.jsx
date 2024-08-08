import { Box, Text, Stack, Image } from "@chakra-ui/react";
import Button from "../Button/Button";
import { useModal } from "../../context/useModal";

const Help = () => {
    const { openModal } = useModal();
  return (
    <>
    <Box className="DnBg bg-cover bg-no-repeat bg-center mxl:h-[85vh] sm:h-[75vh] xsm:h-[65vh] h-[55vh] mxl:py-[6%] xsm:py-[7%] py-[10%] sm:px-[5%] xsm:px-[4%] px-[1%] mt-[7%]">
        <Box className="flex mxl:justify-end justify-center mxl:items-end items-center inset-0">
            <Box className="bg-white mxl:w-[46%] sm:w-[60%] xsm:w-[70%] w-[90%] py-[5%] px-[4%] rounded-[10px]">
                <Box>
                    <Stack spacing={7}>
                        <Text className="md:text-[33px] sm:text-[30px] text-28px font-Poppins font-[700]">Be the Change They Need</Text>
                        <Text className="md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">Your support can make a lasting impact. Together, we can create brighter futures and transform lives.</Text>
                        <Text className="md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">Join us in making a difference. Your involvement can help empower those in need and bring hope to countless lives.</Text>
                        <Button text="Donate in a Case" onClick={openModal}  className="w-[60%] xsmm:w-[45%] py-[10px] rounded-[20px] md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[500] text-[white] text-center"/>
                    </Stack>
                </Box>
            </Box>
        </Box>
    </Box>
  </>
  );
  
};

export default Help;
