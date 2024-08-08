import { Box, Text, Stack, Image } from "@chakra-ui/react";
import {
  FaFistRaised,
  FaBalanceScale,
  FaHandsHelping,
  FaShieldAlt,
  FaHandshake,
  FaUsers,
  FaLeaf,
  FaBullhorn,
  FaLightbulb,
  FaHome,
  FaChartLine,
  FaHeartbeat,
  FaBriefcase
} from "react-icons/fa";
import { GiBookshelf, GiMeal } from 'react-icons/gi';
import { MdSchool, MdGavel, MdPeopleOutline } from 'react-icons/md';


const Goals = () => {
  return (
    <>
      <Box>
        <Box className="flex flex-col justify-center pt-[50px] items-center">
          <Stack className="flex flex-col justify-center items-center mb-[30px]">
            <Text className="md:text-[40px] sm:text-[35px] text-[25px] font-[700] font-Poppins text-center capitalize">
              Goals
            </Text>
            <Text className="md:text-[18px] sm:text-[16px] text-[14px] font-[400] w-[89%] font-Poppins text-center">
            Our organization is dedicated to achieving specific, measurable, and impactful goals that align with our mission and vision. Our primary goals include:
            </Text>
          </Stack>
          <Box className="grid mxl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-[20px] xsm:px-[100px] px-[30px] py-[30px]">
            <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
              <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                <MdSchool size={60} color="#046ba2" />
              </Box>
              <Stack className="flex flex-col justify-center items-center">
                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">
                  Increase Access to Education
                </Text>
                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">
                  Provide scholarships and educational resources to 500 women
                  and children annually.
                </Text>
              </Stack>
            </Box>
            <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
              <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                <GiBookshelf size={60} color="#046ba2" />
              </Box>
              <Stack className="flex flex-col justify-center items-center">
                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">
                Establish Literacy Programs
                </Text>
                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">
                Support literacy and vocational training centers in underserved communities.
                </Text>
              </Stack>
            </Box>
            <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
              <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                <FaHeartbeat size={60} color="#046ba2" />
              </Box>
              <Stack className="flex flex-col justify-center items-center">
                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">
                Improve Healthcare Services
                </Text>
                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">
                Enhance access to reproductive health services and maternal care for 1,000 women.
                </Text>
              </Stack>
            </Box>
            <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
              <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                <GiMeal size={60} color="#046ba2" />
              </Box>
              <Stack className="flex flex-col justify-center items-center">
                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">
                Launch Nutrition Programs
                </Text>
                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">
                Introduce nutrition programs in 10 communities to reduce child malnutrition.
                </Text>
              </Stack>
            </Box>
            <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
              <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                <FaHome size={60} color="#046ba2" />
              </Box>
              <Stack className="flex flex-col justify-center items-center">
                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">
                Expand Shelters and Safe Houses
                </Text>
                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">
                Open additional shelters and safe houses for 200 more women and children escaping violence.
                </Text>
              </Stack>
            </Box>
            <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
              <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                <FaHandsHelping size={60} color="#046ba2" />
              </Box>
              <Stack className="flex flex-col justify-center items-center">
                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">
                Offer Counseling and Support
                </Text>
                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">
                Provide counseling and support group sessions to help 300 individuals with trauma and mental health issues.
                </Text>
              </Stack>
            </Box>
            <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
              <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                <FaBullhorn size={60} color="#046ba2" />
              </Box>
              <Stack className="flex flex-col justify-center items-center">
                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">
                Conduct Public Awareness Campaigns
                </Text>
                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">
                Organize at least 5 campaigns annually on issues such as gender equality and domestic violence.
                </Text>
              </Stack>
            </Box>
            <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
              <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                <MdGavel size={60} color="#046ba2" />
              </Box>
              <Stack className="flex flex-col justify-center items-center">
                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">
                Advocate for Policy Changes
                </Text>
                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">
                Work on local and national policy changes to protect the rights of women and children.
                </Text>
              </Stack>
            </Box>
            <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
              <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                <FaChartLine size={60} color="#046ba2" />
              </Box>
              <Stack className="flex flex-col justify-center items-center">
                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">
                Empower Women Economically
                </Text>
                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">
                Train 1,000 women in financial literacy and entrepreneurship to promote economic independence.


                </Text>
              </Stack>
            </Box>
            <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
              <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                <FaBriefcase size={60} color="#046ba2" />
              </Box>
              <Stack className="flex flex-col justify-center items-center">
                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">
                Support Women-Led Businesses
                </Text>
                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">
                Assist in establishing 50 women-led small businesses through microfinance and mentorship.
                </Text>
              </Stack>
            </Box>
            <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
              <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                <FaUsers size={60} color="#046ba2" />
              </Box>
              <Stack className="flex flex-col justify-center items-center">
                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">
                Build Community Capacity
                </Text>
                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">
                Partner with 20 local organizations to enhance their capacity to address women and children’s issues.


                </Text>
              </Stack>
            </Box>
            <Box className="flex flex-col w-[100%] h-[50vh] border-[1px] border-[#8080808f] rounded-[10px] py-[20px] bg-[white] px-[15px] cursor-pointer hover:transition-all hover:shadow-md justify-center items-center">
              <Box bg="#D4EAF4" className="p-[20px] rounded-[50px] mb-[20px]">
                <MdPeopleOutline size={60} color="#046ba2" />
              </Box>
              <Stack className="flex flex-col justify-center items-center">
                <Text className="text-center md:text-[25px] sm:text-[23px] capitalize text-[18px] font-Poppins font-[700] hover:text-customorange">
                Implement Community Outreach Programs
                </Text>
                <Text className="text-center md:text-[16px] sm:text-[14px] text-[13px] font-Poppins font-[300]">
                Launch outreach initiatives in 30 new communities to meet local needs and promote sustainable development.
                </Text>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Goals;
