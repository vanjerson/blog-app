import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


function MainLayout() {
    return(
        <>
            <Header/>
                <Outlet context={{name: `Van`, address: `Sariaya Quezon`, age: 30}}/>
            <Footer/>
        </>
    )
}

export default MainLayout;