import TopNav from "../../components/Header/TopNav";
import MainNav from "../../components/Header/MainNav";
import Hero from "../../components/Hero/Hero";
import Causes from "../../components/Causes/Causes";
import WhoWeAre from "../../components/Whoweare/Who";
import Serve from "../../components/Serve/Serve";
import Help from "../../components/Help/Help";
import JoinUs from "../../components/JoinUs/JoinUs";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return ( 
        <>
            <TopNav />
            <MainNav />
            <Hero />
            <Causes />
            <WhoWeAre />
            <Serve />
            <Help />
            <JoinUs />
            <Footer />
        </>
     );
}
 
export default Home;