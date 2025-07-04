import ProductCard from "./product-card";
import "./carousel.css";

import type { Product } from "../data/productinfo";

interface CarouselProps {
    carouselTitle: string;
    products: Product[];
}

function Carousel({ carouselTitle, products }: CarouselProps) {
    return (
        <div className="carousel">
            <div className="carouselTitle"> {carouselTitle} </div>
            <div className="carouselContainer">
                <div className="carouselTrack">
                    {(products ?? []).map((product, index) => (
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