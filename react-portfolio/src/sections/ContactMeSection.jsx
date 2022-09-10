// Contact me function:
const ContactMeSection = () => {
  return (
    // Contact me section:
    <div
      name="contactme"
      className="w-full h-screen bg-black flex justify-center items-center p-4"
    >
      {/* Getform : Email form */}
      <form
        method="POST"
        action="https://getform.io/f/d3a67d96-3426-46e5-9d18-224ade326591"
        className="flex flex-col max-w-[600px] w-full"
      >
        {/* Contact title */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red text-white">
            Contact
          </p>
          {/* Sub-text */}
          <p className="text-white py-4">
            Please feel free to contact me using the form below or email me
            directly - iahmed.s226@gmail.com
          </p>
        </div>

        {/* Name input */}
        <input
          className="bg-white p-2"
          type="text"
          placeholder="Name"
          name="name"
        />

        {/* Email input */}
        <input
          className="my-4 p-2  bg-white"
          type="email"
          placeholder="Email"
        />

        {/* Message input */}
        <textarea
          name="message"
          rows="8"
          className="bg-white p-2"
          placeholder="Message"
        ></textarea>

        {/* Message me button */}
        <button className="bg-white text-black border-3 hover:text-white hover:bg-red hover:border-white px-4 py-3 mx-auto my-8 items-center">
          Message me
        </button>
      </form>
    </div>
  );
};

// Export:
export default ContactMeSection;
