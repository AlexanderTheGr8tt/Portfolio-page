import React from "react";

import ProjectCard from "./shared/ProjectCard";
import Link from "next/link";
import Image from "next/image";
import Animated from "./shared/Animated";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center  pt-20 ">
      <h2 className="text-center font-dosis  text-4xl md:text-5xl py-8">
        <Animated
          id="heroTitle"
          text="My Projects"
          style="font-bold"
          effectType="underline"
          color="#831843"
        />
      </h2>

      <div className="grid-cols-1 sm:grid md:grid-cols-2 mx-5 px-5 md:gap-8">
        <ProjectCard
          img="/assets/img/projekt-1.png"
          title="Dev OverFlow"
          tech="Next.js, React, Tailwind, TypeScript"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque quas tempora molestias."
          website="https://stack-overflow-nextjs13-git-017topresults-alexanderthegr8tt.vercel.app/"
          github="https://github.com/AlexanderTheGr8tt/stack-overflow-nextjs13"
        />

        <ProjectCard
          img="/assets/img/projekt-2.png"
          title="Threads"
          tech="Next.js, React, Tailwind, TypeScript"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque quas tempora molestias."
          website="https://threads-app-two-nu.vercel.app/"
          github="https://github.com/AlexanderTheGr8tt/threads_app"
        />

        <ProjectCard
          img="/assets/img/projekt-3.png"
          title="Filmpire"
          tech="Next.js, React, Tailwind, TypeScript"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque quas tempora molestias."
          website="https://genuine-travesseiro-d66d3c.netlify.app/"
          github="https://github.com/AlexanderTheGr8tt/Filmpire"
        />

        <ProjectCard
          img="/assets/img/projekt-4.png"
          title="Sumz"
          tech="Next.js, React, Tailwind, TypeScript"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque quas tempora molestias."
          website="https://lovely-jelly-8136f0.netlify.app/"
          github="https://github.com/AlexanderTheGr8tt/OpenAI_Summarizer"
        />
      </div>
      <Link href="#contact" className="flex justify-end py-20">
        <Image
          src="assets/icons/arrow-down-s-line.svg"
          alt="arrow down"
          width={40}
          height={40}
          className="bg-secondary dark:bg-primary rounded-xl"
        />
      </Link>
    </section>
  );
};

export default Projects;

{
  /* <h3 className="font-laila text-[2.5rem]">Projects</h3>
      <p className="font-mulish text-[1.25rem]">
        Click (Generate) to create a new font pairing, (Lock) to lock fonts
      </p>
      <p className="font-mulish text-[1.25rem]">
        Click (Generate) to create a new font pairing, (Lock) to lock fonts
      </p>
      <p className="font-mulish text-[1.25rem]">
        Click (Generate) to create a new font pairing, (Lock) to lock fonts
      </p> */
}

{
  /* <div className="pt-20 ">
        <div className="flex flex-col items-center w-80  rounded-2xl bg-[#fff7ed] text-primary dark:text-secondary">
          <div className="rounded-lg mx-5 py-5 ">
            <Image
              src="/assets/img/projekt-1.png"
              alt="project 1"
              width={300}
              height={1}
              className="rounded-t-2xl border-2 border-black"
            />
          </div>

          <div className="text-left w-full px-5">
            <h3 className="text-2xl">Stack Overflow</h3>
          </div>

          <div className="flex flex-col justify-center py-4 mx-5">
            <div className="">
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae doloremque quas tempora molestias veritatis enim quasi
                illo quo excepturi debitis voluptatum eius vitae.
              </p>
            </div>

            <div className="flex justify-between pt-3 ">
              <p>Next.js</p>
              <p>React</p>
              <p>Tailwind</p>
            </div>
          </div>

          <div className="flex flex-row w-full pb-5 px-5">
            <div className="flex-1 text-center">
              <Link
                href="https://stack-overflow-nextjs13-git-017topresults-alexanderthegr8tt.vercel.app/"
                className="text-purple"
              >
                Web
              </Link>
            </div>
            <div className="flex-1 text-center">
              <Link
                href="https://github.com/AlexanderTheGr8tt"
                className="text-purple"
              >
                Github
              </Link>
            </div>
          </div>
        </div>
      </div> */
}
