"use client";
import React from "react";
import Animated from "./Animated";

interface Props {
  title: string;
  message: string;
  isModalOpen: Boolean;
  setModalOpen: any;
}

const SuccessErrModal = ({
  title,
  message,
  isModalOpen,
  setModalOpen,
}: Props) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {/* Modal backdrop */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="absolute top-0 left-0 w-full h-full bg-black dark:bg-gray-600 opacity-25"></div>
          {/* Modal content */}
          <div className="relative max-md:flex flex-col items-center bg-primary dark:bg-secondary  py-5 max-md:mx-5 md:px-5 rounded-lg shadow-md z-50 w-auto">
            <h2 className="text-lg md:text-2xl font-dosis mb-4">{title}!</h2>
            <p className="mb-4 text-base md:text-lg text-center max-w-sm leading-8 md:leading-10 font-laila">
              <Animated
                id="heroTitle"
                text={message}
                style=""
                effectType="underline"
                color="#115e59"
              />
            </p>
            {/* Close button */}
            <button
              onClick={closeModal}
              className="text-white bg-red-500 hover:bg-red-600 rounded px-3 py-1 font-laila md:absolute top-4 right-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessErrModal;
