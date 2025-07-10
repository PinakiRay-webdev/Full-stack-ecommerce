import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

import cat1 from "../assets/category/cat-1.jpg";
import cat2 from "../assets/category/cat-2.jpg";
import cat3 from "../assets/category/cat-3.jpg";
import cat4 from "../assets/category/cat-4.jpg";

export const navItems = ["home", "about", "categories"];

export const navIcons = [CiSearch, CiHeart, CiShoppingCart];

export const newsLetterIcons = [
  FaLinkedin,
  FaFacebook,
  FaSquareXTwitter,
  AiFillInstagram,
];

export const categories = [
  {
    id: 1,
    image: cat1,
  },
  {
    id: 2,
    image: cat2,
  },
  {
    id: 3,
    image: cat3,
  },
  {
    id: 4,
    image: cat4,
  },
];
