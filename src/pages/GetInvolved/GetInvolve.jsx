import TopNav from "../../components/Header/TopNav";
import MainNav from "../../components/Header/MainNav";
import GenHero from "../../components/GenHero/GenHero";
import GetForm from "../../components/GetInvolvedForm/Form";
import Footer from "../../components/Footer/Footer";
const GetInvolved = () => {
    return ( 
        <>
            <TopNav />
            <MainNav />
            <GenHero text="Get Involved"/>
            <GetForm />
            <Footer />
        </>
     );
}
 
export default GetInvolved;