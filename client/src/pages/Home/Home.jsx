import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <Slider />
        <FeaturedProducts />
      </div>
    </>
  );
};

export default Home;
