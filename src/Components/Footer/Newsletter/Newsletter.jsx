import newsLetter from "../../../assets/newsletter-bg.jpeg";
import { newsLetterIcons } from "../../../utils/utils";
const Newsletter = () => {
  return (
    <section className="h-[40vh] relative">
      <img
        className="w-full h-full object-cover brightness-90"
        src={newsLetter}
        alt=""
      />
      <article className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center flex flex-col gap-3">
        <h4 className="font-semibold text-zinc-700">NEWSLETTER</h4>
        <h3 className="font-semibold text-black text-xl">
          SIGN UP FOR LATEST UPDATES AND OFFERS
        </h3>
        <form className="flex">
          <input
            className="bg-white w-full py-2 px-3 outline-0"
            type="email"
            placeholder="Jon.snow@gmail.com"
          />
          <button className="bg-purple-600 text-white font-semibold px-4 cursor-pointer">
            Subscribe
          </button>
        </form>
        <span className="text-zinc-700 text-sm font-semibold">
          will be used in accordance with out Privacy Policy
        </span>
        <div className="social media flex items-center justify-center gap-5 mt-4">
          {newsLetterIcons.map((Icons, id) => (
            <p key={id} className="text-2xl last:text-3xl cursor-pointer">
              <Icons />
            </p>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Newsletter;
