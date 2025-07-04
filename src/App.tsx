import './App.css';
import './styles.css';
import Hero from './assets/components/hero';
import TopNav from "./assets/components/topnav";
import Carousel from './assets/components/carousel';
import { productData } from './assets/data/productinfo';

function App() {
  return (
    <>


      <TopNav />
      
      <Hero />

      <div className="productRows">
        <Carousel carouselTitle={"Sodium High Jewelry Bracelet"} 
        products={productData.filter(p => p.category === "high")} />

        <Carousel carouselTitle={"Sodium Bracelet"} 
        products={productData.filter(p => p.category === "core")}/>

        <Carousel carouselTitle={"Sodium Bracelet XL"}
        products={productData.filter(p => p.category === "xl")}/>
      </div>



    </>
  )
}

export default App
