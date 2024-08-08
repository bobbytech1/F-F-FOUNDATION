import { Box, Text, Stack, Image } from "@chakra-ui/react";
import { FaFistRaised, FaBalanceScale, FaHandsHelping, FaShieldAlt, FaHandshake, FaUsers, FaLeaf, FaBullhorn, FaLightbulb } from 'react-icons/fa';
import { MdEqualizer, MdLock, MdGroup, MdCampaign } from 'react-icons/md';
import { RiEmotionHappyFill } from 'react-icons/ri';
import { IoMdLeaf } from 'react-icons/io';


const OurValues = () => {
    return ( 
        <>
            <Box>
                <Box className="flex flex-col justify-center items-center">
                    <Stack className="flex flex-col justify-center items-center mb-[30px]">
                        <Text className="md:text-[40px] sm:text-[35px] text-[25px] font-[700] font-Poppins text-center capitalize">our core values</Text>
                        <Text className="md:text-[18px] sm:text-[16px] text-[14px] font-[400] w-[89%] font-Poppins text-center">We strive to uphold the dignity and rights of every woman and child we serve, fostering a culture of respect, empowerment, and community-driven change.</Text>
                    </Stack>
                    <Box className="grid mxl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-[20px] xsm:px-[100px] px-[30px] py-[30px]">
                        <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
                            <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                                <FaFistRaised size={60} color="#046ba2"/>
                            </Box>
                            <Stack className="flex flex-col justify-center items-center">
                                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">Empowerment</Text>
                                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">We strive to uphold the dignity and rights of every woman and child we serve, fostering a culture of respect, empowerment, and community-driven change.</Text>
                            </Stack>
                        </Box>
                        <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
                            <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                                <FaBalanceScale size={60} color="#046ba2"/>
                            </Box>
                            <Stack className="flex flex-col justify-center items-center">
                                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">Equality</Text>
                                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">We are committed to promoting gender equality and ensuring that all individuals, regardless of gender, have equal access to resources, opportunities, and rights.</Text>
                            </Stack>
                        </Box>
                        <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
                            <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                                <FaHandsHelping size={60} color="#046ba2"/>
                            </Box>
                            <Stack className="flex flex-col justify-center items-center">
                                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">Compassion</Text>
                                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">We approach our work with empathy and understanding, providing compassionate support to those in need.</Text>
                            </Stack>
                        </Box>
                        <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
                            <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                                <FaShieldAlt size={60} color="#046ba2"/>
                            </Box>
                            <Stack className="flex flex-col justify-center items-center">
                                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">Integrity</Text>
                                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">We operate with honesty, transparency, and accountability in all our actions, building trust with our beneficiaries, partners, and stakeholders.</Text>
                            </Stack>
                        </Box>
                        <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
                            <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                                <FaHandshake size={60} color="#046ba2"/>
                            </Box>
                            <Stack className="flex flex-col justify-center items-center">
                                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">Respect</Text>
                                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">We treat all individuals with dignity and respect, recognizing the inherent worth of every person and valuing diverse perspectives.</Text>
                            </Stack>
                        </Box>
                        <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
                            <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                                <FaUsers size={60} color="#046ba2"/>
                            </Box>
                            <Stack className="flex flex-col justify-center items-center">
                                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">Collaboration</Text>
                                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">We believe in the power of partnerships and work collaboratively with communities, organizations, and stakeholders to achieve our mission.</Text>
                            </Stack>
                        </Box>
                        <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
                            <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                                <FaLeaf size={60} color="#046ba2"/>
                            </Box>
                            <Stack className="flex flex-col justify-center items-center">
                                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">Sustainability</Text>
                                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">We are dedicated to creating sustainable solutions that have a lasting impact on the lives of women and children and the communities we serve.</Text>
                            </Stack>
                        </Box>
                        <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
                            <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                                <FaBullhorn size={60} color="#046ba2"/>
                            </Box>
                            <Stack className="flex flex-col justify-center items-center">
                                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">Advocacy</Text>
                                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">We are committed to advocating for the rights and interests of women and children, using our voice to influence policy and drive positive change.</Text>
                            </Stack>
                        </Box>
                        <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
                            <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                                <FaLightbulb size={60} color="#046ba2"/>
                            </Box>
                            <Stack className="flex flex-col justify-center items-center">
                                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">Innovation</Text>
                                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">We strive for continuous improvement and innovation, seeking new and effective ways to address the challenges faced by women and children.</Text>
                            </Stack>
                        </Box>
                        
                    </Box>
              
                </Box>
            </Box>
        </>
     );
}
 
export default OurValues;