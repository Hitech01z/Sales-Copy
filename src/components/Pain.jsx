import { copy } from "../data/Copy";
import { images } from "../data/images";

const Pain = () => {
  return (
    <section className="section bg-slate-950 text-white">
      <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
        <img
          src={images.pain}
          alt="Financial struggle"
          className="rounded-2xl shadow-lg"
        />

        <div className="space-y-4">
          <h2 className="heading-secondary">
            Be Honest With Yourself
          </h2>

          <ul className="space-y-3 text-body">
            {copy.pains.map((item, index) => (
              <li key={index} className="text-red-400">
                ❌ {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pain;
