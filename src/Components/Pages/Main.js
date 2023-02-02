import { useOutletContext } from 'react-router-dom';
import Login from './Login';

function Main() {
    const {user} = useOutletContext();
    return(
        <div className="main-body">
            
                    

                <div id="carouselExampleCaptions" className="carousel carousel-dark slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img style={{height: '570px', width: '350px'}} src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/88121679_3655218471186315_6092442995213205504_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=T8SV5MlmDB4AX_d_NWD&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfDuaWIT2S-YhwuuOqqn9TrQipKwp8QX2B7c8jvXkE7M-g&oe=6402A404" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block" style={{color: 'black'}}>
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img style={{height: '570px', width: '200px'}} src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/322533207_1852611101768967_1125208715052446375_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qiI0E-S_cm8AX-gGtlK&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfBuYO5ribZLty5sS27_JbOV9PeMpJwjZdQVyue7NaSdmQ&oe=63DF3CEC" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block" style={{color: 'black'}}>
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img style={{height: '570px', width: '400px'}} src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/315646720_8468662396508541_7457285449656645207_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Gsze8goyLsoAX_iYJ7g&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDai4kY1bM3wmO31rAoxNew6y-cANfxzey0YBNKQKHw9Q&oe=63DFC1F3" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 style={{color: 'white'}}>Third slide label</h5>
                            <p style={{color: 'white'}}>Some representative placeholder content for the third slide.</p>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>

                    
                </div>
                
           
                


       
    ) 
}

export default Main;