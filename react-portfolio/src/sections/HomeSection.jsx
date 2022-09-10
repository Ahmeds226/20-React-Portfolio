// Import:
// IosIcons icons:
import { IoIosArrowDropright, IoIosArrowDropdownCircle } from "react-icons/io";

// React scroll:
import { Link } from "react-scroll";

// Home section function:
function HomeSection() {
  return (
    <div name="home" className="bg-white w-full h-screen">
      {/* container */}
      <div className="container flex flex-col lg:flex-row items-center justify-center h-full mx-auto space-y-20 lg:space-x-20">
        <div className="max-w-[1000px] px-8 flex flex-col justify-center lg:h-full">
          {/* Sub text */}
          <h1 className="sm:text-2xl font-bold text-black">My name is</h1>

          {/* Name */}
          <h2 className="text-6xl sm:text:text-7xl font-bold text-red">
            Ahmed Shahnawaz
          </h2>

          {/* Description */}
          <p className="text-black py-4 max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque
            illo, porro dicta hic nemo quos natus praesentium amet magni velit
            molestiae alias, nulla iure numquam expedita autem esse minima.
          </p>

          {/* View projects */}
          <div>
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              {/* Buttons */}
              <button className=" text-black bg-white border-2 border-red group px-6 py-3 my-2 flex items-center mx-auto lg:mx-0 hover:text-white hover:bg-red-600 hover:border-black hover:animate-pulse">
                View Projects
                {/* Icons */}
                {/* Right arrow */}
                <span className="block group-hover:hidden">
                  <IoIosArrowDropright className="ml-3" />
                </span>
                {/* Down arrow */}
                <span className="hidden group-hover:block">
                  <IoIosArrowDropdownCircle className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Portrait */}
        <div>
          <div>
            <img
              className="w-64 h-64 rounded-md border-2 border-red"
              src="https://avatars.githubusercontent.com/u/99031421?s=400&u=b3098af3dbaa116d3f8f68ddee0c369e94001fb1&v=4"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Export:
export default HomeSection;
