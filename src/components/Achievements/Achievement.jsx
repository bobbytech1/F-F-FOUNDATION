import { Box, Text, Stack, Divider, Image } from "@chakra-ui/react";
import { FaHandsHoldingCircle, FaHandsHoldingChild, FaPeopleGroup } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import CountUp from 'react-countup';

const Achievements = () => {
    return ( 
        <>
            <Box bg="#f5b05f" className="px-[20px] py-[50px]">
                <Box className="flex flex-wrap items-center justify-center gap-[5%]">
                    <Box className="flex items-center gap-[25px]">
                        <FaHandsHoldingCircle size={60} color="#ffffff" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: '30px' }} />
                        <Stack spacing={0}>
                        <CountUp start={0} end={1000} duration={15} separator="," className="text-[46px] text-white font-Poppins font-[700]"/>
                        <Text className="text-[20px] font-Poppins font-[300] text-white">Active Cases</Text>
                        </Stack>
                    </Box>
                    <Box className="flex items-center gap-[25px]">
                    <IoIosPeople size={60} color="#ffffff" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: '30px' }}/>
                        <Stack>
                        <CountUp start={0} end={1000} duration={15} separator="," className="text-[46px] text-white font-Poppins font-[700]"/>
                        <Text className="text-[20px] font-Poppins font-[300] text-white">People Joined</Text>
                        </Stack>
                    </Box>
                    <Box className="flex items-center gap-[25px]">
                    <FaHandsHoldingChild size={60} color="#ffffff" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: '30px' }}/>
                        <Stack>
                        <CountUp start={0} end={1000} duration={15} separator="," className="text-[46px] text-white font-Poppins font-[700]"/>
                        <Text className="text-[20px] font-Poppins font-[300] text-white">Cases Every Year</Text>
                        </Stack>
                    </Box>
                    <Box className="flex items-center gap-[25px]">
                    <FaPeopleGroup size={60} color="#ffffff" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: '30px' }}/>
                        <Stack>
                        <CountUp start={0} end={1000} duration={15} separator="," className="text-[46px] text-white font-Poppins font-[700]"/>
                        <Text className="text-[20px] font-Poppins font-[300] text-white">People helped</Text>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </>
     );
}
 
export default Achievements;