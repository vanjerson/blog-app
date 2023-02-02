import { Outlet } from "react-router-dom";
import StoryFooter from "../story/StoryFooter";
import StoryHeader from "../story/StoryHeader";


function StoryLayout() {
    return(
        <>
            <StoryHeader/>
                <Outlet/>
            <StoryFooter/>

        </>
    )
}

export default StoryLayout;