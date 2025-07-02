import './App.css';
import './styles.css';
import Hero from './assets/components/hero';
import TopNav from "./assets/components/topnav";
import Carousel from './assets/components/carousel';

function App() {
  return (
    <>


      <TopNav />
      
      <Hero />

      <div className="productRows">
        <Carousel carouselTitle={"Sodium High Jewelry Bracelet"} />
        <Carousel carouselTitle={"Sodium Bracelet"} />
        <Carousel carouselTitle={"Sodium Bracelet XL"}/>
      </div>



    </>
  )
}

export default App
