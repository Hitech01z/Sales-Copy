import Hero from "../components/Hero";
import Pain from "../components/Pain";
import Truth from "../components/Truth";
import Offer from "../components/Offer";
import Authority from "../components/Authority";
import Community from "../components/Community";
import CTA from "../components/CTA";
import Disclaimer from "../components/Disclaimer";
import { FaWhatsapp } from "react-icons/fa";


const Home = () => {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Pain />
      <Truth />
      <Offer />
      <Authority />
      <Community />
      <CTA />
      <Disclaimer />

      <a
  href="http://chat.whatsapp.com/ETOJe01JuWFG3Q6H7llW0N"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 z-50"
>
  <FaWhatsapp size={28} />
</a>

    </div>
  );
};

export default Home;
