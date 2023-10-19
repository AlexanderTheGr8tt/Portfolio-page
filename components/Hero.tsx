import Image from "next/image";
import Link from "next/link";
import Animated from "./shared/Animated";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <section id="home" className="w-full min-h-screen flex justify-center my-2">
      <div className="lg:w-full flex flex-col md:flex-row-reverse justify-center md:items-center  gap-5 lg:gap-16 mx-5 md:mx-8">
        <div className="flex justify-center ">
          <Image
            src="/assets/img/home-2.png"
            alt="profile image"
            className="rounded-full bg-[#ca8a04] md:hidden shadow-black dark:shadow-white"
            width={250}
            height={250}
          />
          <Image
            src="/assets/img/home-2.png"
            alt="profile image"
            className="rounded-full bg-[#ca8a04] max-md:hidden shadow-black dark:shadow-white lg:mr-8 max-lg:max-w-[300px]"
            width={400}
            height={400}
          />
        </div>

        <div className="flex flex-col gap-10 md:gap-14 lg:gap-20 max-lg:max-w-[400px]">
          <h1 className="text-center font-dosis text-4xl md:text-[44px] lg:text-[55px] pt-12">
            {t("title")}{" "}
            <Animated
              id="heroTitle"
              text={t("name")}
              style="font-bold"
              effectType="underline"
              color="#831843"
            />
          </h1>

          <p className="font-laila text-center px-4 leading-8 lg:leading-10 text-lg md:text-[21px] lg:text-2xl max-w-[453px] md:max-w-xl">
            <Animated
              id="heroTitle"
              text={t("job")}
              style="font-bold text-primary"
              effectType="highlight"
              color="#115e59"
            />
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
