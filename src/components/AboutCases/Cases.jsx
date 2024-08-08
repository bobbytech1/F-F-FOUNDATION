import React from "react";
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
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "../Carousel/CarouselArrows";
import Button from "../Button/Button";
import { useModal } from "../../context/useModal";
import CardImage1 from "../../assets/images/Events/event4.jpg"
import CardImage2 from "../../assets/images/Events/event6.jpg"
import CardImage3 from "../../assets/images/Events/event7.jpg"

const Cases = () => {
  const { openModal } = useModal();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    fade: false,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2500
          }
        }
      ]
  };
<h2></h2>
  const cards = [
    {
      imageSrc:
        CardImage1,
      title: "Rights Advocacy",
      description:
        "The NGO is actively fighting against discrimination, abuse, and exploitation, ensuring that women and children have the rights and protection they deserve.",
      priceGoal: "$450",
      priceRaised: "$300"
    },
    {
      imageSrc:
      CardImage2,
      title: "Women’s Empowerment",
      description:
        "The NGO provides educational opportunities, vocational training, and leadership workshops to empower women, helping them build self-esteem, financial independence, and entrepreneurial skills.",
      priceGoal: "$550",
      priceRaised: "$400"
    },
    {
      imageSrc:
      CardImage3,
      title: "Health Support",
      description:
        "The NGO offers essential healthcare services, including maternal and child health care, along with nutritional programs to ensure that women and children have access to proper nutrition and overall well-being.",
      priceGoal: "$650",
      priceRaised: "$500"
    },
  ];

  return (
    <>
    <h2 className="md:text-[40px] sm:text-[35px] text-[25px] text-center font-[700] mt-[60px] mb-[30px]">Cases we are serving</h2>
         <Box position="relative"
    margin="0 auto"
    overflow="hidden"
    className="w-[90%] pb-[50px]"
    >
      <Box
        className="sm:py-[0] sm:px-[50px] py-[0] px-[0]"
      >
        <Slider {...settings}>
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
        </Slider>
      </Box>
    </Box>
    </>
   
  );
};

export default Cases;
