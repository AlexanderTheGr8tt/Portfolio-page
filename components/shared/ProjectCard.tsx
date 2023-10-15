"use client";
import Link from "next/link";
import React, { useState } from "react";
import Animated from "./Animated";
import ImageModal from "./ImageModal";

interface Props {
  img: string;
  title: string;
  tech: string;
  description: string;
  website: string;
  github: string;
}

const ProjectCard = ({
  img,
  title,
  tech,
  description,
  website,
  github,
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    if (window.matchMedia("(min-width: 640px)").matches) setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <div className="mx-auto mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 max-md:max-w-[500px] md:max-w-xl ">
      <img
        className="rounded-t-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] max-h-[373px] transform transition-transform md:hover:scale-110 cursor-pointer"
        src={img}
        alt={`${title} project image`}
        onClick={openModal}
      />

      <div className="p-6">
        <h5 className="mb-1 text-xl md:text-3xl font-dosis leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <p className="font-mulish text-sm md:text-lg">
          <span>Tech: </span>
          {tech}
        </p>
        <p className="pt-3 font-inter text-base md:text-xl text-neutral-600 dark:text-neutral-200">
          {description}
        </p>
      </div>

      <div className="flex flex-1 flex-row w-full pb-5 px-5 font-inter text-secondary dark:text-primary">
        <div className="flex-1 flex  gap-8">
          <Link href={website}>
            <Animated
              id="projectButton"
              text="Try it Live!"
              style="text-black hover:text-gray-500 p-1 md:text-lg"
              effectType="highlight"
              color="#ffd54f"
            />
          </Link>

          <Link href={github}>
            <Animated
              id="projectButton"
              text="See the Code"
              style="text-black hover:text-gray-500 p-1 md:text-lg"
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
