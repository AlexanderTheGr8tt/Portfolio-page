import Image from "next/image";
import Link from "next/link";
import Animated from "./shared/Animated";

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-screen">
      <div className="flex flex-col items-center  h-screen pt-20">
        <div className=" lg:w-full flex flex-col md:flex-row-reverse md:justify-center items-center gap-14 md:gap-10 lg:gap-16 h-screen mx-5 md:mx-8 ">
          <div className="flex justify-center pt-12 ">
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
              className="rounded-full bg-[#ca8a04] max-md:hidden shadow-black dark:shadow-white"
              width={400}
              height={400}
            />
          </div>

          <div className="flex flex-col gap-10">
            <h1 className="text-center font-dosis w-auto text-4xl md:text-5xl pt-12">
              Hello! I'm{" "}
              <Animated
                id="heroTitle"
                text="Aleksander"
                style="font-bold"
                effectType="underline"
                color="#831843"
              />
            </h1>

            <p className="font-laila text-center px-4 pb-auto leading-8 md:leading-10 text-lg md:text-2xl max-w-[453px] md:max-w-xl">
              <Animated
                id="heroTitle"
                text="Web Developer "
                style="font-bold text-primary"
                effectType="highlight"
                color="#115e59"
              />
              , whit knowledge in web development and design. I offer the best
              projects resulting in quality work.
            </p>
          </div>
        </div>

        {/* -- button to next section -- */}
        <Link href="#about" className="flex justify-center mb-6">
          <Image
            src="assets/icons/arrow-down-s-line.svg"
            alt="arrow down"
            width={40}
            height={40}
            className="bg-secondary dark:bg-primary rounded-xl"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
