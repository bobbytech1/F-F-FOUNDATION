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
    SimpleGrid
  } from "@chakra-ui/react";

  import Button from "../Button/Button";
  import CardImage1 from "../../assets/images/Events/event4.jpg"
  import CardImage2 from "../../assets/images/Events/event6.jpg"
  import CardImage3 from "../../assets/images/Events/event7.jpg"
  import CardImage4 from "../../assets/images/Events/event8.jpg"
  import CardImage5 from "../../assets/images/Events/event9.jpg"
  import CardImage6 from "../../assets/images/Events/event10.jpg" 
const WhatWeDo = () => {
    const cards = [
        {
          imageSrc:
            CardImage1,
          title: "Advocacy and Awareness",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolore!",
        },
        {
          imageSrc:
          CardImage2,
          title: "Education and Empowerment",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolore!",
        },
        {
          imageSrc:
          CardImage3,
          title: "Health and Wellbeing",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolore!",
        },
        {
          imageSrc:
          CardImage4,
          title: "Support Services",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolore!",
        },
        {
          imageSrc:
          CardImage5,
          title: "Legal Assistance",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolore!",
        },
        {
          imageSrc:
          CardImage6,
          title: "Community Development",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolore!"
        },
        {
          imageSrc:
          CardImage6,
          title: "Research and Data Collection",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolore!"
        },
        {
          imageSrc:
          CardImage6,
          title: "Collaboration and Networking",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolore!"
        },
        {
          imageSrc:
          CardImage6,
          title: "Fundraising and Resource Mobilization",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolore!"
        },
      ];
    return ( 
        <>
         <h2 className="md:text-[40px] sm:text-[35px] text-[25px] text-center font-[700] my-[30px]">What We Do</h2>
         <Box className="sm:py-[0] sm:px-[50px] py-[0] px-[20px]">
      <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(330px, 1fr))">
        {cards.map((card, index) => (
          <Box key={index} padding="2">
            <Card>
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
                  <Heading size="md" className="text-center">{card.title}</Heading>
                  <Text className="text-[16px] text-center font-[300]">{card.description}</Text>
                  <Box className="flex items-center justify-center gap-[25px]">
                    <Button text="Get Involved" to="/getinvolved" className="px-[30px] py-[10px] text-white font-Poppins rounded-[20px]"/>
                    
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
}
 
export default WhatWeDo;