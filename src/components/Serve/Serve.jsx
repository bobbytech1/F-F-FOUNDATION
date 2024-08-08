import { Box, Text, Stack, Image } from "@chakra-ui/react";
import { FaBullhorn, FaBook, FaHeartbeat } from 'react-icons/fa';
import Button from "../Button/Button";

const Serve = () => {
    return ( 
        <>
            <Box>
                <Box className="flex flex-col justify-center items-center">
                    <Stack className="flex flex-col justify-center items-center mb-[30px]">
                        <Text className="md:text-[40px] sm:text-[35px] text-[25px] font-[700] font-Poppins text-center">We serve communities.</Text>
                        <Text className="md:text-[18px] sm:text-[16px] text-[14px] font-[400] w-[89%] font-Poppins text-center">We provide programs and resources that empower and uplift lives, ensuring a brighter future for women and children in need.</Text>
                    </Stack>
                    <Box className="grid mxl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-[20px] xsm:px-[100px] px-[30px] py-[30px]">
                        <Box className="flex flex-col w-[100%] justify-center items-center">
                            <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                                <FaBullhorn size={60} color="#046ba2"/>
                            </Box>
                            <Stack className="flex flex-col justify-center items-center">
                                <Text className="text-center md:text-[26px] sm:text-[24px] capitalize text-[20px] font-Poppins font-[700] hover:text-customorange">Advocacy and Awareness</Text>
                                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">We champion the rights of women and children by fighting against discrimination, abuse, and exploitation, while raising public awareness on critical issues such as gender equality, health, education, and violence.</Text>
                            </Stack>
                        </Box>
                        <Box className="flex flex-col w-[100%] justify-center items-center">
                            <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                                <FaBook size={60} color="#046ba2"/>
                            </Box>
                            <Stack className="flex flex-col justify-center items-center">
                                <Text className="text-center md:text-[26px] capitalize sm:text-[24px] text-[20px] font-Poppins font-[700] hover:text-customorange">Education and Empowerment</Text>
                                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">We provide educational opportunities and resources, including literacy programs, vocational training, and scholarships, while conducting workshops on leadership, self-esteem, financial literacy, and entrepreneurship.</Text>
                            </Stack>
                        </Box>
                        <Box className="flex flex-col w-[100%] justify-center items-center">
                             <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                                <FaHeartbeat size={60} color="#046ba2"/>
                             </Box>
                             <Stack className="flex flex-col justify-center items-center">
                                <Text className="text-center md:text-[26px] capitalize sm:text-[24px] text-[20px] font-Poppins font-[700] hover:text-customorange">Health and Wellbeing</Text>
                                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">We offer comprehensive healthcare services, including reproductive health, maternal care, child health, and mental health support, while implementing programs to ensure proper nutrition through food distribution and education.</Text>
                             </Stack>
                        </Box>
                    </Box>
                    <Button
              text="Learn More"
              to="/programs"
              className="px-[25px] py-[10px] font-Poppins text-white rounded-[20px]"
            />
                </Box>
            </Box>
        </>
     );
}
 
export default Serve;