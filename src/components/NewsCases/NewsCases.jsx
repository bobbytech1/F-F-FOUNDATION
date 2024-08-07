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

const NewsCases = () => {
    const cards = [
        {
          imageSrc:
            CardImage1,
          title: "Sponsor a child",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolore!",
          priceGoal: "$450",
          priceRaised: "$300"
        },
        {
          imageSrc:
          CardImage2,
          title: "Sponsor a child",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolore!",
          priceGoal: "$550",
          priceRaised: "$400"
        },
        {
          imageSrc:
          CardImage3,
          title: "Sponsor a child",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolore!",
          priceGoal: "$650",
          priceRaised: "$500"
        },
        {
          imageSrc:
          CardImage4,
          title: "Sponsor a child",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolore!",
          priceGoal: "$650",
          priceRaised: "$500"
        },
        {
          imageSrc:
          CardImage5,
          title: "Sponsor a child",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolore!",
          priceGoal: "$650",
          priceRaised: "$500"
        },
        {
          imageSrc:
          CardImage6,
          title: "Sponsor a child",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolore!",
          priceGoal: "$650",
          priceRaised: "$500"
        },
      ];
    return ( 
        <>
         <h2 className="md:text-[40px] sm:text-[35px] text-[25px] text-center font-[700] my-[30px]">Cases we are serving</h2>
         <Box className="sm:py-[0] sm:px-[50px] py-[0] px-[20px]">
      <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(350px, 1fr))">
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
                  <Heading size="lg">{card.title}</Heading>
                  <Text className="text-[16px] font-[300]">{card.description}</Text>
                  <Box className="flex items-center gap-[25px]">
                    <Button text="Donate" to="/getinvolved" className="px-[30px] py-[10px] text-white rounded-[20px]"/>
                    <Box className="flex items-center gap-[20px]">
                      <Text className="flex flex-col">
                        <Text className="text-customorange text-[20px]">{card.priceGoal}</Text>
                        <Text className="font-[300]">Goal</Text>
                      </Text>
                      <Text className="flex flex-col">
                        <Text className="text-customorange text-[20px]">{card.priceRaised}</Text>
                        <Text className="font-[300]">Raised</Text>
                      </Text>
                    </Box>
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
 
export default NewsCases;