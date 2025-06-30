import "../../styles.css";
import "./product-card.css";
import Multicolor from "../images/SodiumBracelet_01_MultiColor.png";

function ProductCard() {
    return (
        <div className="card-container">
            <div className="color-style"> Multi Color </div>
            <div className="color-stripe"> </div>
            <img className="product" src={Multicolor} />

        </div>
    )
}

export default ProductCard;