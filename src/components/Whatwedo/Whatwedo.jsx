import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  Box,
  ButtonGroup,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

import Button from "../Button/Button";
import CardImage1 from "../../assets/images/Events/event1.jpg";
import CardImage2 from "../../assets/images/Events/event12.jpg";
import CardImage3 from "../../assets/images/Events/event15.jpg";
import CardImage4 from "../../assets/images/Events/event16.jpg";
import CardImage5 from "../../assets/images/Events/event9.jpg";
import CardImage6 from "../../assets/images/Events/event7.jpg";
import CardImage7 from "../../assets/images/Events/event17.jpg";
import CardImage8 from "../../assets/images/Events/event14.jpg";
import CardImage9 from "../../assets/images/Events/event19.jpg";
const WhatWeDo = () => {
  const cards = [
    {
      imageSrc: CardImage1,
      title: "Advocacy and Awareness",
      description:
        "We champion the rights of women and children by fighting against discrimination, abuse, and exploitation. Additionally, we raise awareness about issues affecting women and children, such as gender equality, health, education, and violence.",
    },
    {
      imageSrc: CardImage2,
      title: "Education and Empowerment",
      description:
        "We provide educational opportunities and resources to women and children, including literacy programs, vocational training, and scholarships. We also conduct workshops and training sessions on topics like leadership, self-esteem, financial literacy, and entrepreneurship to empower them.",
    },
    {
      imageSrc: CardImage3,
      title: "Health and Wellbeing",
      description:
        "We offer healthcare services, including reproductive health, maternal care, child health, and mental health support. Additionally, we implement nutritional programs to ensure proper nutrition for women and children, including food distribution and nutrition education",
    },
    {
      imageSrc: CardImage4,
      title: "Support Services",
      description:
        "We provide counseling services and support groups for women and children dealing with trauma, abuse, or other challenges. We also operate shelters and safe houses for those escaping domestic violence or homelessness.",
    },
    {
      imageSrc: CardImage5,
      title: "Legal Assistance",
      description:
        "We offer legal assistance and support for women and children facing issues like domestic violence, custody battles, and human rights violations. We also work on developing and influencing policies that promote and protect their rights.",
    },
    {
      imageSrc: CardImage6,
      title: "Community Development",
      description:
        "We engage with communities to address local issues affecting women and children by working on community-based solutions and building the capacity of local organizations and community members to effectively tackle these issues.",
    },
    {
      imageSrc: CardImage7,
      title: "Research and Data Collection",
      description:
        "We conduct research to better understand the challenges faced by women and children and collect and analyze data to inform policy and program development, as well as to monitor and evaluate the impact of our interventions.",
    },
    {
      imageSrc: CardImage8,
      title: "Collaboration and Networking",
      description:
        "We collaborate with government agencies, non-governmental organizations, and other stakeholders to amplify efforts and resources, and create networks and alliances to strengthen the collective impact of organizations working towards similar goals.",
    },
    {
      imageSrc: CardImage9,
      title: "Fundraising and Resource Mobilization",
      description:
        "We organize fundraising campaigns and events to support the organization’s programs and activities, and apply for grants and funding opportunities to sustain and expand the organization’s work.",
    },
  ];
  return (
    <>
      <h2 className="md:text-[40px] sm:text-[35px] text-[25px] text-center font-[700] my-[30px]">
        What We Do
      </h2>
      <Box className="sm:py-[0] sm:px-[50px] py-[0] px-[20px]">
        <SimpleGrid
          spacing={6}
          templateColumns="repeat(auto-fill, minmax(330px, 1fr))"
        >
          {cards.map((card, index) => (
            <Box key={index} padding="2">
              <Card className="h-[80vh]">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  borderRadius="lg"
                  objectFit="cover"
                  height="200px"
                  width="100%"
                />
                <CardBody>
                  <Stack mt="3" pr="1" pl="1" spacing="3">
                    <Heading size="md" className="text-center">
                      {card.title}
                    </Heading>
                    <Text className="text-[16px] text-center font-[300]">
                      {card.description}
                    </Text>
                    <Box className="flex items-center justify-center gap-[25px]">
                      <Button
                        text="Get Involved"
                        to="/getinvolved"
                        className="px-[30px] py-[10px] text-white font-Poppins rounded-[20px]"
                      />
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default WhatWeDo;
