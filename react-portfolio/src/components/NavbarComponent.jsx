// Imports:
// Imported useState hooks:
import { useState } from "react";

// Icons:
// Font Awesome icons:
// Hamburger, Github, LinkedIn and Phone icons:
import { FaBars, FaGithub, FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";

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

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <IoIosCloseCircle />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
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
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Work
          </Link>
        </li>
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
    </div>
  );
}

export default NavbarComponent;
