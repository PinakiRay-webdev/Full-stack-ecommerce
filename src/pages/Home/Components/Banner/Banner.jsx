import bannerImg from "../../../../assets/banner-img.png";
const Banner = () => {
  return (
    <main className="hero-banner py-[40px] px-0 relative bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] lg:h-[90vh]">
      <section className="h-full flex md:flex-row flex-col-reverse gap-6 md:gap-0 items-center">
        <div id="left" className="md:w-[50%] px-2 h-full text-white flex flex-col items-center justify-center">
          <h1 className="text-7xl md:text-9xl md:font-extrabold font-bold">SALES</h1>
          <p className="text-sm md:w-[60%] text-center my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quibusdam facilis distinctio illo. Minima libero delectus eos fugit
          </p>
          <div className="flex gap-2">
            <button className="border-2 px-6 py-2 cursor-pointer">Read More</button>
            <button className="border-2 border-white px-6 py-2 bg-white text-black cursor-pointer">Shop Now</button>
          </div>
        </div>
        <div id="right" className="h-full md:w-[50%] flex justify-center items-center">
          <img
            className="md:w-full md:h-full object-contain w-[80%] h-[80%]"
            src={bannerImg}
            alt=""
          />
        </div>
      </section>
    </main>
  );
};

export default Banner;
