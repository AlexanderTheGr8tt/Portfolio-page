import Image from "next/image";
import Link from "next/link";
import React from "react";
import Animated from "./shared/Animated";
import { useTranslations } from "next-intl";
import TextModal from "./shared/TextModal";

const About = () => {
  const t = useTranslations("About");
  return (
    <section
      className="w-full min-h-screen flex justify-center mt-10"
      id="about"
    >
      <div className="lg:w-full flex flex-col md:flex-row-reverse justify-center items-center mx-auto gap-5 lg:gap-10">
        <div className="flex flex-col max-md:max-w-[500px] md:gap-10">
          <h2 className="text-center font-dosis text-3xl md:text-4xl lg:text-5xl pt-10 max-sm:pb-8 sm:pb-12 md:pb-0">
            <Animated
              id="aboutContact"
              text={t("title")}
              style="font-bold"
              effectType="underline"
              color="#831843"
            />
          </h2>

          <div className="flex flex-col px-3 gap-5">
            <div>
              <p className="font-laila text-sm sm:text-base lg:text-lg max-w-lg md:max-w-xl md:pb-3">
                {t("description.p-1")}
              </p>
              <TextModal
                p1={t("description.p-1")}
                p2={t("description.p-2")}
                p3={t("description.p-3")}
                p4={t("description.p-3")}
                style="md:hidden"
              />
              <p className="max-md:hidden font-laila text-sm md:text-base lg:text-lg max-w-lg md:max-w-xl pb-3">
                {t("description.p-2")}
              </p>
              <p className="max-md:hidden font-laila text-sm md:text-base lg:text-lg max-w-lg md:max-w-xl pb-3">
                {t("description.p-3")}
              </p>
              <p className="max-md:hidden font-laila text-sm md:text-base lg:text-lg max-w-lg md:max-w-xl pb-3">
                {t("description.p-4")}
              </p>
            </div>

            <div className="font-mulish  md:max-w-xl">
              <p className="text-primary">
                <Animated
                  id="aboutContact"
                  text=" Skills:  "
                  style="font-bold text-base sm:text-lg md:text-xl lg:text-2xl"
                  effectType="highlight"
                  color="#115e59"
                />
              </p>
              {/* <span> </span> */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                {t("skills")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex md:flex-col-reverse justify-center gap-5 sm:gap-16 px-3 pt-3 w-full md:w-auto ">
          <div className="font-laila flex flex-col md:flex-row justify-center  gap-14 md:gap-10 w-28 md:w-full  ">
            <Link href="#contact">
              <Animated
                id="aboutContact"
                text={t("contact")}
                style="text-sm md:text-base lg:text-lg hover:text-[#b087de]"
                effectType="box"
                color="#8B41E0"
              />
            </Link>
            <Link href="https://github.com/AlexanderTheGr8tt">
              <Animated
                id="aboutContact"
                text={t("github")}
                style="text-sm md:text-base lg:text-lg hover:text-[#b087de]"
                effectType="box"
                color="#8B41E0"
              />
            </Link>
          </div>

          <div className="max-md:w-50 max-md:h-56 flex justify-center items-center">
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
