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
      {/* <div className="lg:w-full flex flex-col md:flex-row-reverse justify-center items-center   lg:gap-16 mx-5 md:mx-8"> */}
      <div className="lg:w-full flex flex-col md:flex-row-reverse justify-center items-center mx-5 md:mx-8">
        <div className="flex flex-col md:w-30 md:pb-20">
          <h2 className="text-center font-dosis text-4xl md:text-5xl max-h-[]: pb-12">
            <Animated
              id="aboutContact"
              text="About Me"
              style="font-bold"
              effectType="underline"
              color="#831843"
            />
          </h2>

          <div className="flex flex-col px-3 ">
            <p className="font-laila leading-8 md:leading-10 text-lg md:text-2xl max-w-[550px] pb-5">
              Web developer, with extensive knowledge and years of experience,
              working in web technologies and Ui / Ux design, delivering quality
              work.
            </p>

            <div className="font-mulish leading-8 md:leading-10 text-lg md:text-2xl max-w-[453px] ">
              <p className="text-primary">
                <Animated
                  id="aboutContact"
                  text="  My Skills Are:  "
                  style="font-bold"
                  effectType="highlight"
                  color="#115e59"
                />
              </p>
              <span> </span>
              HTML, CSS, JavaScript, React, Next.js, Tailwind, MongoDB, Git &
              Github.
            </div>
          </div>
        </div>

        <div className="flex md:flex-col-reverse justify-center gap-5 sm:gap-16 pt-5 px-4 w-full md:w-auto ">
          <div className="font-laila flex flex-col md:flex-row justify-center md:justify-between gap-14 md:gap-0 w-28 md:w-full  ">
            <Link href="#contact">
              <Animated
                id="aboutContact"
                text="Contact Me!"
                style="font-bold md:text-xl"
                effectType="box"
                color="#8B41E0"
              />
            </Link>
            <Link href="https://github.com/AlexanderTheGr8tt">
              <Animated
                id="aboutContact"
                text="My GitHub!"
                style="font-bold md:text-xl"
                effectType="box"
                color="#8B41E0"
              />
            </Link>
          </div>

          <div className="w-54 h-54 flex justify-center items-center">
            <Image
              src="/assets/img/about-1.png"
              alt="profile image"
              className="rounded-full bg-[#ca8a04] md:hidden shadow-black dark:shadow-white"
              width={220}
              height={220}
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
