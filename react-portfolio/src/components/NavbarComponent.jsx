// Imports:
// Imported useState hooks:
import { useState } from "react";

// Icons:
// Font Awesome icons:
// Hamburger, Github, LinkedIn and Phone icons:
import { FaBars, FaGithub, FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";

// IonIcons icons:
// Mail :
import { IoIosMail } from "react-icons/io";

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
    </div>
  );
}

export default NavbarComponent;
