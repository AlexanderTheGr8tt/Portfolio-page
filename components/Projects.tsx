import React from "react";
import ProjectCard from "./shared/ProjectCard";
import Animated from "./shared/Animated";
import { useTranslations } from "next-intl";

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
          website="https://stack-overflow-nextjs13-git-017topresults-alexanderthegr8tt.vercel.app/"
          github="https://github.com/AlexanderTheGr8tt/stack-overflow-nextjs13"
          buttonLive={t("project-1.live")}
          buttonGithub={t("project-1.code")}
        />

        <ProjectCard
          img="/assets/img/projekt-2.png"
          title={t("project-2.title")}
          tech={t("project-2.tech")}
          description={t("project-2.description")}
          website="https://threads-app-two-nu.vercel.app/"
          github="https://github.com/AlexanderTheGr8tt/threads_app"
          buttonLive={t("project-2.live")}
          buttonGithub={t("project-2.code")}
        />

        <ProjectCard
          img="/assets/img/projekt-3.png"
          title={t("project-3.title")}
          tech={t("project-3.tech")}
          description={t("project-3.description")}
          website="https://genuine-travesseiro-d66d3c.netlify.app/"
          github="https://github.com/AlexanderTheGr8tt/Filmpire"
          buttonLive={t("project-3.live")}
          buttonGithub={t("project-3.code")}
        />

        <ProjectCard
          img="/assets/img/projekt-4.png"
          title={t("project-4.title")}
          tech={t("project-4.tech")}
          description={t("project-4.description")}
          website="https://lovely-jelly-8136f0.netlify.app/"
          github="https://github.com/AlexanderTheGr8tt/OpenAI_Summarizer"
          buttonLive={t("project-4.live")}
          buttonGithub={t("project-4.code")}
        />
      </div>
    </section>
  );
};

export default Projects;
