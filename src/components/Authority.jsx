import Reveal from "./Reveal";
import { images } from "../data/images";

const Authority = () => {
  return (
    <section className="section bg-black text-white">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <Reveal>
          <img
            src={images.authority}
            alt="Stock analysis workspace"
            className="rounded-2xl shadow-2xl"
          />
        </Reveal>

        {/* Content */}
        <Reveal>
          <div className="space-y-6">
            <h2 className="heading-secondary">
              This Is Not Motivation.
            </h2>

            <p className="text-body">
              This is real strategy. Real analysis. Real stock selection.
            </p>

            <div className="space-y-3 text-green-400 font-semibold">
              <p>✔ Nigerian stock analysis</p>
              <p>✔ U.S market breakdown</p>
              <p>✔ Risk management principles</p>
              <p>✔ Monthly capital growth system</p>
            </div>

            <p className="text-gray-400 text-sm">
              Built for Africans who are tired of gambling with their money.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Authority;
