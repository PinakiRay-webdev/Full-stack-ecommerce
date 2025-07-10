import "./Footer.css"
import Newsletter from "./Newsletter/Newsletter";
const Footer = () => {
  return (
    <div>
      <Newsletter />
      <section className="footer py-12 px-6 sm:px-8 md:px-16 lg:px-44 flex justify-between items-start flex-wrap">
        {/* about section  */}
        <div className="w-[24rem]">
          <h4 className="text-lg font-semibold mb-3">About</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
            consectetur obcaecati quo dignissimos repellendus porro doloribus
          </p>
        </div>

        {/* contact section  */}
        <div className="w-[18rem]">
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p>Shipa park, Hanuman nagar, Kondapur, Hyderabad, India, 757001</p>
          <p>Phone: (91+)4883040</p>
          <p>Email: Dummy@gmail.com</p>
        </div>

        {/* categories section  */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Categories</h4>
          <p>Headphone</p>
          <p>Smart Watches</p>
          <p>Bluetooth Speakers</p>
          <p>Wireless Earbuds</p>
          <p>Home Theatre</p>
          <p>Projectors</p>
        </div>

        {/* Pages section  */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Pages</h4>
          <p id="home">Home</p>
          <p>About</p>
          <p>Privacy Policy</p>
          <p>Returns</p>
          <p>Terms & Conditions</p>
          <p>Contact Us</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
