import Customers from "./Components/Customers/Customers";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import SectionTitle from "./Components/Features/SectionTitle";
import Work from "./Components/SectionWork/Work";
import VisibilitySlide from "./Components/VisibilitySlide";
import Steps from "./Components/Steps/Steps";
import SecValues from "./Components/SectionValues/SecValues";
import Card from "./Components/Pricing/Card";
import Testimonials from "./Components/Testimonials/Testimonials";
import Faq from "./Components/FAQ/Faq";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  const handleVisibilityChange = (inView, entry) => {
    if (inView) {
      console.log("Element visible :", entry.target);
      // Ajoutez ici une action à exécuter lorsque l'élément devient visible
    } else {
      console.log("Element invisible :", entry.target);
      // Ajoutez ici une action à exécuter lorsque l'élément sort de la vue
    }
  };
  return (
    <div>
      <div className="md:px-16 md:py-8 px-8 py-8">
        <VisibilitySlide duration={1000} triggerOnce onVisibilityChange={handleVisibilityChange} >
          <Navbar />
          <Header />
          <Customers />
        </VisibilitySlide>
        <VisibilitySlide duration={2000} direction="right" triggerOnce onVisibilityChange={handleVisibilityChange}>
          <SectionTitle />
        </VisibilitySlide>
        <VisibilitySlide duration={1000} direction="left" triggerOnce onVisibilityChange={handleVisibilityChange}>
          <Work />
        </VisibilitySlide>
        <VisibilitySlide duration={1000} direction="right" triggerOnce onVisibilityChange={handleVisibilityChange}>
          <Steps />
        </VisibilitySlide>

        <VisibilitySlide duration={1000} direction="left" triggerOnce onVisibilityChange={handleVisibilityChange}>
          <SecValues />
        </VisibilitySlide>
        <VisibilitySlide duration={1000} direction="right" triggerOnce onVisibilityChange={handleVisibilityChange}>
          <Card />
        </VisibilitySlide>
        <VisibilitySlide duration={1000} direction="left" triggerOnce onVisibilityChange={handleVisibilityChange}>
          <Testimonials />
        </VisibilitySlide>

        <VisibilitySlide duration={1000} direction="right" triggerOnce onVisibilityChange={handleVisibilityChange}>
          <Faq />
        </VisibilitySlide>

        <VisibilitySlide duration={1000} direction="left" triggerOnce onVisibilityChange={handleVisibilityChange}>
          <Contact />
        </VisibilitySlide>


      </div>
      <Footer />
    </div>

  );
}

export default App;
