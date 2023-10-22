"use client";
import Link from "next/link";
import React, { useState } from "react";
import Animated from "./Animated";
import ImageModal from "./ImageModal";
import TextModal from "./TextModal";

interface Props {
  img: string;
  title: string;
  tech: string;
  description: string;
  website: string;
  github: string;
  buttonLive: string;
  buttonGithub: string;
  p1?: string;
  p2?: string;
  p3?: string;
}

const ProjectCard = ({
  img,
  title,
  tech,
  description,
  website,
  github,
  buttonLive,
  buttonGithub,
  p1,
  p2,
  p3,
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <div className="mx-auto mt-6 flex flex-col self-start rounded-lg bg-white shadow-xl dark:shadow-stone-900 dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 max-md:max-w-[500px] md:max-w-xl ">
      <img
        className="rounded-t-lg shadow-lg dark:shadow-stone-900 max-h-[373px] transform transition-transform md:hover:scale-110 cursor-pointer"
        src={img}
        alt={`${title} project image`}
        onClick={openModal}
      />

      <div className="p-6">
        <h5 className="mb-1 text-xl md:text-2xl lg:text-3xl font-dosis leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <p className="font-mulish text-sm md:text-base ">
          <span>Tech: </span>
          {tech}
        </p>
        <p className="pt-3 font-mulish text-base lg:text-lg text-neutral-600 dark:text-neutral-200">
          {description}
        </p>
        <span>
          <TextModal p1={p1} p2={p2} p3={p3} />
        </span>
      </div>

      <div className="flex flex-1 flex-row w-full pb-5 px-5 font-mulish text-secondary dark:text-primary">
        <div className="flex-1 flex  gap-8">
          <Link href={website}>
            <Animated
              id="projectButton"
              text={buttonLive}
              style="text-black hover:text-gray-500 p-1 lg:text-lg"
              effectType="highlight"
              color="#ffd54f"
            />
          </Link>

          <Link href={github}>
            <Animated
              id="projectButton"
              text={buttonGithub}
              style="text-black hover:text-gray-500 p-1 lg:text-lg"
              effectType="highlight"
              color="#ffd54f"
            />
          </Link>
        </div>
      </div>

      {modalVisible && (
        <ImageModal closeModal={closeModal} img={img} title={title} />
      )}
    </div>
  );
};

export default ProjectCard;
