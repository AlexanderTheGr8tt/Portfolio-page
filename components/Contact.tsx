import React from "react";
import ContactForm from "./ContactForm";
import ContactMe from "./ContactMe";

const Contact = () => {
  return (
    <section
      className="flex md:w-[500px] min-h-screen flex-col items-center justify-center  gap-10"
      id="contact"
    >
      <h3 className="font-laila text-[2.5rem]">Let's Chat</h3>
      {/* <p className="font-mulish text-[1.25rem]">
        Click (Generate) to create a new font pairing, (Lock) to lock fonts
      </p>
      <p className="font-mulish text-[1.25rem]">
        Click (Generate) to create a new font pairing, (Lock) to lock fonts
      </p>
      <p className="font-mulish text-[1.25rem]">
        Click (Generate) to create a new font pairing, (Lock) to lock fonts
      </p> */}
      {/* <ContactForm /> */}
      <ContactMe />
    </section>
  );
};

export default Contact;
