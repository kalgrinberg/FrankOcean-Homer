import "../../styles.css";
import "./product-card.css";

function ProductCard(props: any) {
    return (
        <div className="card-container">

            <div className="color-style"> {props.colorStyle} </div>
            <div className="color-stripe" style={props.colorStripe}> </div>
            <img className="product" src={props.productImage} />
            <div className="material"> 18K White Gold & Diamonds </div>
            <div className="AddtoCart"> 
                <span>Add to Cart</span>
                <span>$5,940.00</span>
            </div>

        </div>
    )
}

export default ProductCard;