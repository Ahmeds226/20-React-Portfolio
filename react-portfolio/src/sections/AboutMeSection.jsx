// About me section function:
const AboutMeSection = () => {
  return (
    <div name="aboutme" className="w-full h-screen bg-white text-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            {/* Title */}
            <p className="text-4xl font-bold inline border-b-4 border-red">
              About Me:
            </p>
          </div>
        </div>
        {/* Sub-heading */}
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4 space-y-6 sm:space-y-0">
          <div className="sm:text-right text-4xl font-bold ">
            <p>
              <p>
                Lorem 123 ipsum dolor sit amet consectetur adipisicing elit.
                Eum, ipsa quo nihil accusantium repudiandae, sapiente tempora
                non sint ducimus quisquam est possimus repellat culpa mollitia
                molestias odio nemo tempore modi!
              </p>
            </p>
          </div>
          {/* Body text */}
          <div className="space-y-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quo, amet laboriosam minima cum ducimus sint dolores quaerat
              voluptates, sapiente nam a odit porro illo voluptatibus eius modi
              dolore. Aspernatur?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export:
export default AboutMeSection;
