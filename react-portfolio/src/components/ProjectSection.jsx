// Imports:
// IonIcons import:
// Code // IOS Create icon:
import { IoIosCreate } from "react-icons/io";

// Deploy // IOS Desktop Icon:
import { IoIosDesktop } from "react-icons/io";

// Made function to call the project section:
// Listed the labels that would come up:
const ProjectSection = ({
  image,
  alt,
  title,
  description,
  deployedLink,
  repositoryLink,
}) => {
  // Preview section / Images:
  <div className="card group max-w-md bg-base-100 shadow-lg rounded-lg mx-auto cursor-pointer">
    <figure className="h-48 overflow-auto">
      <img
        className="w-full h-full object-contain object-top p-5 bg-sky-600 group-hover:bg-red-500"
        // Preview image:
        src={image}
        // text if image does not show:
        alt={alt}
      />
    </figure>
  </div>;
};
