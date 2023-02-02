import { useOutletContext } from 'react-router-dom';

function About() {
    const user = useOutletContext();
    return(
        <>Hello, {user.name} {user.address} {user.age}!</>
    )
}

export default About;