import { Box, Text, Stack, Image } from "@chakra-ui/react";
import { CgShoppingBag } from "react-icons/cg";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import Button from "../Button/Button";

const Serve = () => {
    return ( 
        <>
            <Box>
                <Box className="flex flex-col justify-center items-center">
                    <Stack className="flex flex-col justify-center items-center mb-[30px]">
                        <Text className="md:text-[40px] sm:text-[35px] text-[25px] font-[700] font-Poppins text-center">We serve for peoples</Text>
                        <Text className="md:text-[18px] sm:text-[16px] text-[14px] font-[400] w-[89%] font-Poppins text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur beatae accusantium provident!</Text>
                    </Stack>
                    <Box className="grid mxl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-[20px] xsm:px-[100px] px-[30px] py-[30px]">
                        <Box className="flex flex-col w-[100%] justify-center items-center">
                            <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                                <CgShoppingBag size={60} color="#046ba2"/>
                            </Box>
                            <Stack className="flex flex-col justify-center items-center">
                                <Text className="text-center md:text-[26px] sm:text-[24px] capitalize text-[20px] font-Poppins font-[700] hover:text-customorange">Advocacy and Awareness</Text>
                                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum aperiam dolorem ex error blanditiis ut nulla.</Text>
                            </Stack>
                        </Box>
                        <Box className="flex flex-col w-[100%] justify-center items-center">
                            <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                                <MdOutlineHealthAndSafety size={60} color="#046ba2"/>
                            </Box>
                            <Stack className="flex flex-col justify-center items-center">
                                <Text className="text-center md:text-[26px] capitalize sm:text-[24px] text-[20px] font-Poppins font-[700] hover:text-customorange">Education and Empowerment</Text>
                                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempora quasi quas mollitia assumenda laborum dolorem.</Text>
                            </Stack>
                        </Box>
                        <Box className="flex flex-col w-[100%] justify-center items-center">
                             <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                                <MdCastForEducation size={60} color="#046ba2"/>
                             </Box>
                             <Stack className="flex flex-col justify-center items-center">
                                <Text className="text-center md:text-[26px] capitalize sm:text-[24px] text-[20px] font-Poppins font-[700] hover:text-customorange">Health and Wellbeing</Text>
                                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, nisi odit officia labore non illo ducimus.</Text>
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