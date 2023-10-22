import React from "react";
import ProjectCard from "./shared/ProjectCard";
import Animated from "./shared/Animated";
import { useTranslations } from "next-intl";
import "../messages/pl.json";

const Projects = () => {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="flex flex-col items-center  pt-20 ">
      <h2 className="text-center font-dosis  text-4xl md:text-5xl py-8">
        <Animated
          id="heroTitle"
          text={t("title")}
          style="font-bold"
          effectType="underline"
          color="#831843"
        />
      </h2>

      <div className="grid-cols-1 sm:grid md:grid-cols-2 mx-5 px-5 md:gap-8">
        <ProjectCard
          img="/assets/img/projekt-1.png"
          title={t("project-1.title")}
          tech={t("project-1.tech")}
          description={t("project-1.description")}
          website="https://portfolio-page-git-multi-language-alexanderthegr8tt.vercel.app/"
          github="https://github.com/AlexanderTheGr8tt/Portfolio-page/tree/multi-language"
          buttonLive={t("project-1.live")}
          buttonGithub={t("project-1.code")}
          p1={t("project-1.descriptionLong.p1")}
          p2={t("project-1.descriptionLong.p2")}
          p3={t("project-1.descriptionLong.p3")}
        />

        <ProjectCard
          img="/assets/img/projekt-2.png"
          title={t("project-2.title")}
          tech={t("project-2.tech")}
          description={t("project-2.description")}
          website="https://stack-overflow-nextjs13-git-017topresults-alexanderthegr8tt.vercel.app/"
          github="https://github.com/AlexanderTheGr8tt/stack-overflow-nextjs13/tree/017_top_results"
          buttonLive={t("project-2.live")}
          buttonGithub={t("project-2.code")}
          p1={t("project-2.descriptionLong.p1")}
          p2={t("project-2.descriptionLong.p2")}
          p3={t("project-2.descriptionLong.p3")}
        />

        <ProjectCard
          img="/assets/img/projekt-3.png"
          title={t("project-3.title")}
          tech={t("project-3.tech")}
          description={t("project-3.description")}
          website="https://threads-app-two-nu.vercel.app/"
          github="https://github.com/AlexanderTheGr8tt/threads_app"
          buttonLive={t("project-3.live")}
          buttonGithub={t("project-3.code")}
          p1={t("project-3.descriptionLong.p1")}
          p2={t("project-3.descriptionLong.p2")}
          p3={t("project-3.descriptionLong.p3")}
        />

        <ProjectCard
          img="/assets/img/projekt-4.png"
          title={t("project-4.title")}
          tech={t("project-4.tech")}
          description={t("project-4.description")}
          website="https://genuine-travesseiro-d66d3c.netlify.app/"
          github="https://github.com/AlexanderTheGr8tt/Filmpire"
          buttonLive={t("project-4.live")}
          buttonGithub={t("project-4.code")}
          p1={t("project-4.descriptionLong.p1")}
          p2={t("project-4.descriptionLong.p2")}
          p3={t("project-4.descriptionLong.p3")}
        />
      </div>
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
