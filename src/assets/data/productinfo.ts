import MultiColor from "../images/SodiumBracelet_01_MultiColor.png";
import White from "../images/SodiumBracelet_02_White.png";
import Clover from "../images/SodiumBracelet_GradientClover.png";
import Retba from "../images/SodiumBracelet_GradientRetbaPink.png";
import ChetBlue from "../images/SodiumBracelet_GradientChetBlue.png";
import BubbleBlue from "../images/SodiumBracelet_GradientBubbleBlue.png";
import Cadmium from "../images/SodiumBracelet_GradientCadmiumRed.png";
import Infrared from "../images/SodiumBracelet_GradientInfrared.png";


export interface Product {
  colorStyle: string;   // blueprint only
  colorStripe: string;
  productImage: string;
  material: string;
  price: string;
  category: "high" | "core" | "xl";
}

export const productData: Product [] = [
    {
        colorStyle: "Multi Color",
        colorStripe: "linear-gradient(to right, #00af66, #ff6720);",
        productImage: MultiColor,
        material: "18K White Gold & Diamonds",
        price: "$378,700.00",
        category: "high",
    },
    {
        colorStyle: "White",
        colorStripe: "linear-gradient(to right, rgb(255, 255, 255), rgb(255, 255, 255)",
        productImage: White,
        material: "18K White Gold & Diamonds",
        price: "$357,100.00",
        category: "high",
    },
    {
        colorStyle: "Clover Gradient",
        colorStripe: "linear-gradient(to right, rgb(0, 175, 102), rgb(192, 218, 99)",
        productImage: Clover,
        material: "925 Silver with Lacquer",
        price: "$5,940.00",
        category: "core",
    },

    {
        colorStyle: "Retba Pink",
        colorStripe: "linear-gradient(to right, rgb(0, 175, 102), rgb(244, 166, 215)",
        productImage: Retba,
        material: "925 Silver with Lacquer",
        price: "$5,940.00",
        category: "core",
    },

    {
        colorStyle: "Chet Blue Gradient",
        colorStripe: "linear-gradient(to right, rgb(48, 127, 226), rgb(192, 218, 99)",
        productImage: ChetBlue,
        material: "925 Silver with Lacquer",
        price: "$5,940.00",
        category: "core",
    },

    {
        colorStyle: "Bubble Blue Gradient",
        colorStripe: "linear-gradient(to right, #59cbe8, #c0da63)",
        productImage: BubbleBlue,
        material: "925 Silver with Lacquer",
        price: "$5,940.00",
        category: "core",
    },

    {
        colorStyle: "Cadmium Red Gradient",
        colorStripe: "linear-gradient(to right, #f9423a, #ff6720)",
        productImage: Cadmium,
        material: "925 Silver with Lacquer",
        price: "$5,940.00",
        category: "core",
    },

    {
        colorStyle: "Infrared Gradient",
        colorStripe: "linear-gradient(to right, #ff6720, #c0da63)",
        productImage: Infrared,
        material: "925 Silver with Lacquer",
        price: "$5,940.00",
        category: "core",
    },
]