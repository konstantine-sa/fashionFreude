import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <Slider />
        <FeaturedProducts
          type="Ausgewählte Produkte"
          description=" Überprüfen Sie unsere ausgewählten Modestücke und bleiben Sie mit den
          neuesten Trends stets auf dem Laufsteg der Mode!"
        />
        <Categories />
        <FeaturedProducts
          type="Trendprodukte"
          description="Überprüfen Sie unsere angesagtesten Modestücke und verleihen Sie Ihrem Stil mit den neuesten Looks der Saison das gewisse Etwas!"
        />
        <Contact />
      </div>
    </>
  );
};

export default Home;
