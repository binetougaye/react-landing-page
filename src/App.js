import Customers from "./Components/Customers/Customers";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import { Slide } from "react-awesome-reveal";
import SectionTitle from "./Components/Features/SectionTitle";
function App() {
  return (
    <div className="px-16 py-8">
      <Slide triggerOnce>
        <Navbar />
        <Header />
        <Customers />
      </Slide>

      <SectionTitle />

    </div>
  );
}

export default App;
