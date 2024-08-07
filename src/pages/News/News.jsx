import TopNav from "../../components/Header/TopNav";
import MainNav from "../../components/Header/MainNav";
import GenHero from "../../components/GenHero/GenHero";
import NewsCases from "../../components/NewsCases/NewsCases";
import Help from "../../components/Help/Help";
import JoinUs from "../../components/JoinUs/JoinUs";
import Footer from "../../components/Footer/Footer";
const News = () => {
    return ( 
        <>
            <TopNav />
            <MainNav />
            <GenHero text="News" />
            <NewsCases />
            <Help />
            <JoinUs />
            <Footer />
        </>
     );
}
 
export default News;