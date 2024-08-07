import { Box, Stack, Text, Image } from "@chakra-ui/react";
import TopNav from "../../components/Header/TopNav";
import MainNav from "../../components/Header/MainNav";
import GenHero from "../../components/GenHero/GenHero";
import AboutUs from "../../components/AboutUs/AboutUs";
import Serve from "../../components/Serve/Serve";
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
            <Serve />
            <Cases />
            <JoinUs />
            <Footer />
        </>
     );
}
 
export default About;