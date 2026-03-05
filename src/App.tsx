import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Heritage } from "./components/sections/Heritage";
import { Temples } from "./components/sections/Temples";
import { Serving } from "./components/sections/Serving";
import { Contact } from "./components/sections/Contact";

const App = () => {
  return (
    <Background>
      <Navbar />
      <div className="pt-10 md:pt-0">
        <Hero />
        <Heritage />
        <Temples />
        <Serving />
        <Contact />
      </div>
    </Background>
  );
};

export default App;