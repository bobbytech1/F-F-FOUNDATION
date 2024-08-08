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
import { useModal } from "../../context/useModal";
import CardImage1 from "../../assets/images/Events/event4.jpg"
import CardImage2 from "../../assets/images/Events/event6.jpg"
import CardImage3 from "../../assets/images/Events/event7.jpg"
import CardImage4 from "../../assets/images/Events/event8.jpg"
import CardImage5 from "../../assets/images/Events/event9.jpg"
import CardImage6 from "../../assets/images/Events/event10.jpg"

const NewsCases = () => {
  const { openModal } = useModal();
    const cards = [
        {
          imageSrc:
            CardImage2,
          title: "Rights Advocacy",
          description:
            "The NGO is actively fighting against discrimination, abuse, and exploitation, ensuring that women and children have the rights and protection they deserve.",
          priceGoal: "$450",
          priceRaised: "$300"
        },
        {
          imageSrc:
          CardImage1,
          title: "Women’s Empowerment",
          description:
            "The NGO provides educational opportunities, vocational training, and leadership workshops to empower women, helping them build self-esteem, financial independence, and entrepreneurial skills.",
          priceGoal: "$550",
          priceRaised: "$400"
        },
        {
          imageSrc:
          CardImage6,
          title: "Health Support",
          description:
            "The NGO offers essential healthcare services, including maternal and child health care, along with nutritional programs to ensure that women and children have access to proper nutrition and overall well-being.",
          priceGoal: "$650",
          priceRaised: "$500"
        },
        {
          imageSrc:
          CardImage4,
          title: "Support Services",
          description:
            "Provide counseling and support groups for trauma and abuse, along with operating shelters and safe houses for those escaping domestic violence or homelessness.",
          priceGoal: "$650",
          priceRaised: "$500"
        },
        {
          imageSrc:
          CardImage5,
          title: "Legal Assistance",
          description:
            "Offer legal aid for issues such as domestic violence and custody battles, and work on developing policies to protect and promote the rights of women and children.",
          priceGoal: "$650",
          priceRaised: "$500"
        },
        {
          imageSrc:
          CardImage3,
          title: "Community Development",
          description:
            "Engage with communities to address local issues and build capacity through outreach and strengthening local organizations.",
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
            <Card className="h-[73vh]">
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
                <h2 className="text-[25px] font-[700]">{card.title}</h2>
                  <Text className="text-[16px] font-[300]">{card.description}</Text>
                  <Box className="flex items-center gap-[25px]">
                    <Button text="Donate" onClick={openModal} className="px-[30px] py-[10px] text-white rounded-[20px]"/>
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