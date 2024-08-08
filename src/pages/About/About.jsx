import { Box, Stack, Text, Image } from "@chakra-ui/react";
import TopNav from "../../components/Header/TopNav";
import MainNav from "../../components/Header/MainNav";
import GenHero from "../../components/GenHero/GenHero";
import AboutUs from "../../components/AboutUs/AboutUs";
import Vision from "../../components/Vision/OurVision";
import Serve from "../../components/Serve/Serve";
import OurMission from "../../components/Mission/OurMission";
import OurValues from "../../components/Values/OurValues";
import Goals from "../../components/Goals/Goals"
import Cases from "../../components/AboutCases/Cases";
import JoinUs from "../../components/JoinUs/JoinUs";
import Footer from "../../components/Footer/Footer";

const About = () => {
    return ( 
        <>
            <TopNav/>
            <MainNav />
            <GenHero text="About Us"/>
            <AboutUs />
            <Vision />
            <Serve />
            <OurMission />
            <OurValues />
            <Goals />
            <Cases />
            <Footer />
        </>
     );
}
 
export default About;