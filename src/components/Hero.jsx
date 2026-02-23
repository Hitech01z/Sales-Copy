import { copy } from "../data/copy";
import { images } from "../data/images";

const Hero = () => {
  return (
    <section className="section bg-black text-white">
      <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="heading-primary">{copy.hero.headline}</h1>
          <p className="text-body">{copy.hero.subheadline}</p>
          <a
            href="http://chat.whatsapp.com/ETOJe01JuWFG3Q6H7llW0N"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary">Join Now</button>
          </a>
        </div>

        <img
          src={images.hero}
          alt="Financial stress"
          className="rounded-2xl shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
