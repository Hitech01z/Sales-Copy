import { copy } from "../data/Copy";
import { images } from "../data/images";

const Truth = () => {
  return (
    <section className="section bg-black text-white">
      <div className="container-custom text-center space-y-6">
        <h2 className="heading-secondary text-red-500">
          {copy.truth.title}
        </h2>
        <p className="text-2xl font-bold">
          {copy.truth.problem}
        </p>
        <p className="text-2xl text-green-400 font-bold">
          {copy.truth.solution}
        </p>

        <img
          src={images.truth}
          alt="Realization"
          className="rounded-2xl mx-auto mt-8"
        />
      </div>
    </section>
  );
};

export default Truth;
