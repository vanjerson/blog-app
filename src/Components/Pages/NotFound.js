import { Link } from "react-router-dom";
import '../Css/notfound.css'

function NotFound() {
    return(
        <>

            <div id="error404">
            <h1><span>4</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke-linecap="round" r="40" stroke-width="8" stroke="#1B1B1B" stroke-dasharray="60 60">
                <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.5s" begin="0s" repeatCount="indefinite"></animateTransform>
                </circle>
                <circle cx="50" cy="50" fill="none" stroke-linecap="round" r="30" stroke-width="8" stroke="#222222" stroke-dasharray="50 50" stroke-dashoffset="50">
                <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;-360 50 50" keyTimes="0;1" dur="1.5s" begin="0s" repeatCount="indefinite"></animateTransform>
                </circle></svg><span>4</span>
            </h1>
            <p class="subtitle">Page Not Found</p>
            </div>

        <br/>

         <div style={{textAlign:'center'}}>   
            <Link to='/'>Go Back Home</Link>
        </div>
        </>
        
    )
}

export default NotFound;