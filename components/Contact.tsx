import React from "react";
import ContactMe from "./ContactMe";
import Animated from "./shared/Animated";

const Contact = () => {
  return (
    <section
      className="flex min-w-[300px] md:w-[500px] min-h-screen flex-col items-center justify-center  gap-10 relative"
      id="contact"
    >
      <h3 className="text-center font-dosis text-4xl md:text-5xl max-md:pb-12">
        <Animated
          id="aboutContact"
          text="Let's Talk"
          style="font-bold"
          effectType="underline"
          color="#831843"
        />
      </h3>

      <ContactMe />

      <footer className="absolute bottom-5">
        <small>&copy; Copyright 2023, Aleksander Małecki</small>
      </footer>
    </section>
  );
};

export default Contact;
