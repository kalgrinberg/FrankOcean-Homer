import HeroImg from "../images/vitrine_w.png";
import "./hero.css";


function Hero() {
    return (
        <div className="superheroContainer">
            <img className="heroimage" src={HeroImg} />
        </div>
    );
}

export default Hero;