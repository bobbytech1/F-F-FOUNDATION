import TopNav from "../../components/Header/TopNav";
import MainNav from "../../components/Header/MainNav";
import GenHero from "../../components/GenHero/GenHero";
import WhatWeDo from "../../components/Whatwedo/Whatwedo";
import Help from "../../components/Help/Help";
import JoinUs from "../../components/JoinUs/JoinUs";
import Footer from "../../components/Footer/Footer";

const Programs = () => {
    return ( 
        <>
            <TopNav />
            <MainNav />
            <GenHero text="Programs/Projects"/>
            <WhatWeDo />
            <Help />
            <JoinUs />
            <Footer />
        </>
     );
}
 
export default Programs;