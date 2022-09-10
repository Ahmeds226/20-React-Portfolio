// Imports:
// Imported useState hooks:
import { useState } from "react";

// Icons:
// Font Awesome icons:
// Hamburger, Github, LinkedIn icons:
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";

// IonIcons icons:
// Mail and Close button :
import { IoIosMail, IoIosCloseCircle } from "react-icons/io";

// Scrolling:
// React Scroll:
import { Link } from "react-scroll";

function NavbarComponent() {
  const [nav, setNav] = useState(false);
  //   const handleClick = () => setNav(!nav);
  return (
    // Navbar
    <div className="fixed w-full h-[80px] flex justify-center items-center px-4 bg-darkgray text-white z-10">
      <Link to="home" smooth={true} duration={500} offset={-80}></Link>

      {/* Navbar Menu */}
      <ul className="hidden md:flex space-x-4">
        <li className="border-transparent border-b-2 pb-2 hover:border-pink-600 hover:text-white hover:border-b-2">
          <Link to="home" smooth={true} duration={500} offset={-80}>
            Home
          </Link>
        </li>
        <li className=" border-transparent border-b-2 hover:border-pink-600 hover:text-white hover:border-b-2">
          <Link to="aboutme" smooth={true} duration={500} offset={-80}>
            About Me
          </Link>
        </li>
        <li className="border-transparent border-b-2 pb-2 hover:border-pink-600 hover:text-white hover:border-b-2">
          <Link to="projects" smooth={true} duration={500} offset={-80}>
            Projects
          </Link>
        </li>
        <li className="border-transparent border-b-2 pb-2 hover:border-pink-600 hover:text-white hover:border-b-2">
          <Link to="contactme" smooth={true} duration={500} offset={-80}>
            Contact Me
          </Link>
        </li>
      </ul>

      {/* Hamburger / Mobile phone menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <IoIosCloseCircle />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-red flex flex-col justify-center items-center"
        }
      >
        {/* View Home section */}
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Home
          </Link>
        </li>
        {/* View About Me section */}
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="aboutme"
            smooth={true}
            duration={500}
            offset={-80}
          >
            About Me
          </Link>
        </li>
        {/* View Projects section */}
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Projects
          </Link>
        </li>
        {/* View Contact me section */}
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contactme"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Contact Me
          </Link>
        </li>
      </ul>

      {/* Social Media icons */}

      {/* LinkedIn */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2D64BC]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/ahmed-shahnawaz-a869791bb/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          {/* GitHub */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0E1116]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/Ahmeds226"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          {/* Email */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#57B6F3]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="mailto:iahmed.s226@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email <IoIosMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarComponent;
