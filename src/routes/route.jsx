import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import News from "../pages/News/News";
import GetInvolved from "../pages/GetInvolved/GetInvolve";
import Programs from "../pages/Programs/Programs";

const FolderRoute = () => {
    return ( 
        <>
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/getinvolved" element={<GetInvolved />} />
                <Route path="/programs" element={<Programs />} />
            </Routes> 
        </div>
           
        </>
     );
}
 
export default FolderRoute;