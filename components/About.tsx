import Image from "next/image";
import Link from "next/link";
import React from "react";
import Animated from "./shared/Animated";

const About = () => {
  return (
    <section
      className="w-full min-h-screen flex justify-center my-10"
      id="about"
    >
      <div className="lg:w-full flex flex-col md:flex-row-reverse justify-center items-center mx-auto lg:gap-10">
        <div className="flex flex-col max-md:max-w-[500px] md:gap-16">
          <h2 className="text-center font-dosis text-4xl md:text-5xl max-md:pb-12 ">
            <Animated
              id="aboutContact"
              text="About Me"
              style="font-bold"
              effectType="underline"
              color="#831843"
            />
          </h2>

          <div className="flex flex-col px-3 md:gap-5">
            <p className="font-laila max-md:leading-8 md:leading-9 lg:leading-10  text-lg md:text-[22px] lg:text-2xl max-w-lg md:max-w-xl pb-5">
              Web developer, with extensive knowledge and years of experience,
              working in web technologies and Ui / Ux design, delivering quality
              work.
            </p>

            <div className="font-mulish leading-7 md:leading-10 text-base md:text-xl md:max-w-xl">
              <p className="text-primary">
                <Animated
                  id="aboutContact"
                  text="  My Skills:  "
                  style="font-bold text-xl md:text-2xl"
                  effectType="highlight"
                  color="#115e59"
                />
              </p>
              {/* <span> </span> */}
              <p>
                HTML, CSS, JavaScript, React, Next.js, Tailwind, MongoDB, Git &
                Github.
              </p>
            </div>
          </div>
        </div>

        <div className="flex md:flex-col-reverse justify-center gap-5 sm:gap-16 px-3 w-full md:w-auto ">
          <div className="font-laila flex flex-col md:flex-row justify-center  gap-14 md:gap-10 w-28 md:w-full  ">
            <Link href="#contact">
              <Animated
                id="aboutContact"
                text="Contact Me!"
                style="text-base md:text-lg hover:text-[#b087de]"
                effectType="box"
                color="#8B41E0"
              />
            </Link>
            <Link href="https://github.com/AlexanderTheGr8tt">
              <Animated
                id="aboutContact"
                text="My GitHub!"
                style="text-base md:text-lg hover:text-[#b087de]"
                effectType="box"
                color="#8B41E0"
              />
            </Link>
          </div>

          <div className="max-md:w-56 max-md:h-56 flex justify-center items-center">
            <Image
              src="/assets/img/about-1.png"
              alt="profile image"
              className="rounded-full bg-[#ca8a04] md:hidden shadow-black dark:shadow-white"
              width={230}
              height={230}
            />
            <Image
              src="/assets/img/about-2.png"
              alt="profile image"
              className="rounded-full bg-[#ca8a04] max-md:hidden shadow-black dark:shadow-white"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
