import Reveal from "./Reveal";
import { images } from "../data/images";

const Community = () => {
  return (
    <section className="section bg-slate-950 text-white">
      <div className="container-custom text-center space-y-10">

        <Reveal>
          <h2 className="heading-secondary">
            We Are Building A Financial Army
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-body max-w-3xl mx-auto">
            An army of Nigerians and Africans who understand the stock market,
            control their money, and stop being victims of scams.
          </p>
        </Reveal>

        <Reveal>
          <img
            src={images.community}
            alt="Financial community"
            className="rounded-2xl mx-auto shadow-xl"
          />
        </Reveal>

        <Reveal>
          <div className="space-y-3 text-green-400 font-semibold">
            <p>🔥 Understand the stock market</p>
            <p>🔥 Control your money</p>
            <p>🔥 Build generational wealth</p>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Community;
