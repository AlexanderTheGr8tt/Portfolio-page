import React from "react";

interface PropsModal {
  img: string;
  title: string;
  closeModal: () => void;
}

const ImageModal = ({ closeModal, img, title }: PropsModal) => {
  return (
    <div
      className=" fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50"
      onClick={closeModal}
    >
      <div className="relative bg-white shadow-lg rounded-lg">
        <img
          src={img}
          alt={`${title} project image`}
          className="max-h-[80vh] max-w-[80vw]"
        />
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
