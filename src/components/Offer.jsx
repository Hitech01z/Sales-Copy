import { copy } from "../data/copy";
import { images } from "../data/images";

const Offer = () => {
  return (
    <section className="section bg-slate-950 text-white">
      <div className="container-custom space-y-8 text-center">
        <h2 className="heading-secondary">
          What You Will Learn
        </h2>

        <ul className="space-y-4 text-body">
          {copy.offer.map((item, index) => (
            <li key={index} className="text-green-400 font-semibold">
              ✔ {item}
            </li>
          ))}
        </ul>

        <img
          src={images.offer}
          alt="Stock dashboard"
          className="rounded-2xl mx-auto"
        />
      </div>
    </section>
  );
};

export default Offer;
