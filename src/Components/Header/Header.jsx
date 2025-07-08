import { useState, useEffect } from "react";
import { navItems, navIcons } from "../../utils/utils";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [headerBG, setHeaderBG] = useState("bg-gradient-to-r from-[#8e2de2] to-[#4a00e0]");

  const handleScroll = () => {
    const scrollPos = window.scrollY;

    
    if (scrollPos > 200) {
      setHeaderBG("bg-black");
    } else {
      setHeaderBG("bg-gradient-to-r from-[#8e2de2] to-[#4a00e0]");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`text-white h-[10vh] px-6 sm:px-8 md:px-16 lg:px-44 flex justify-between items-center w-full sticky top-0 ${headerBG} transition ease-in-out duration-200 z-10`}
    >
      <nav
        id="left"
        className="hidden sm:flex h-full items-center justify-between uppercase min-w-[12rem] w-[14rem]"
      >
        {navItems?.map((item, id) => (
          <p className="cursor-pointer text-xs font-semibold" key={id}>
            {item}
          </p>
        ))}
      </nav>

      <section className="flex items-center gap-2">
        <p className="block sm:hidden text-xl">
          <FaBars />
        </p>
        <h1 className="text-white text-2xl uppercase font-bold">brand</h1>
      </section>

      <nav
        id="right"
        className="flex items-center justify-end sm:justify-center gap-8 min-w-[12rem] w-[14rem]"
      >
        {navIcons?.map((Icon, id) => (
          <p className="text-white text-xl cursor-pointer relative" key={id}>
            <Icon />
            {Icon === CiShoppingCart && (
              <span className="absolute bg-purple-600 rounded-full text-xs font-semibold text-white px-[5px] py-[2px] top-[-0.5rem] right-[-0.5rem]">
                2
              </span>
            )}
          </p>
        ))}
      </nav>
    </header>
  );
};

export default Header;
