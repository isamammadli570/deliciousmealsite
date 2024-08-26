import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Orders",
    link: "/#",
  },
  {
    title: "Cocktails",
    link: "/#",
  },
  {
    title: "Meals",
    link: "/#",
  },
  {
    title: "Help",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#",
  },
];
function Footer() {
  return (
    <footer className="bg-gray-100 px-10 ">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* detail hisse */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl sm:text-left text-justify mb-3 flex items-center ">
              Delici<span className="font-bold">ous</span>
            </h1>
            <p className="">
              Delicious Meal Site is the perfect place to discover the most
              delicious meals. Our mission is to offer a wide variety and
              excellent service to food enthusiasts.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Baku, Azerbaijan</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+51 123456789</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="/#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="/#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="/#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Location
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved || Made with ❤️ by Isa Mammadli
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
