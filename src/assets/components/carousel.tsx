import ProductCard from "./product-card";
import "./carousel.css";




/* TESTING THIS */
import "../data/productinfo";
import { productData } from "../data/productinfo";

function Carousel() {
    return (
        <div className="carousel">
            <div className="carouselTitle"> Sodium Bracelet </div>
            <div className="carouselContainer">
                <div className="carouselTrack">

                    {productData.map((product, index) => (
                        <ProductCard
                            key={index}
                            colorStyle={product.colorStyle}
                            colorStripe={product.colorStripe}
                            productImage={product.productImage}
                            material={product.material}
                            price={product.price}
                        />
                    ))}
                </div>

            </div>
            
            </div>
    )
}
            export default Carousel;