"use client";

import { title } from "process";
import React, { useState } from "react";

interface Props {
  p1?: string;
  p2?: string;
  p3?: string;
  p4?: string;
  style?: string;
}

const TextModal = ({ p1, p2, p3, p4, style }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className={`${style} cursor-pointer`}>
      <p onClick={openModal} className="text-[#ca8a04] text-sm">
        See more...
      </p>
      {modalVisible && (
        <div
          className="px-5 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50"
          onClick={closeModal}
        >
          <div className="bg-secondary dark:bg-primary text-primary dark:text-secondary rounded flex justify-center">
            <p className=" relative mx-5 p-4 mt-5 font-mulish text-sm md:text-base lg:text-lg max-w-lg md:max-w-xl">
              {p1}
              <br />
              <br />
              {p2}
              <br />
              <br />
              {p3}
              <br />
              <br />

              <div
                onClick={closeModal}
                className="flex justify-center text-primary dark:text-secondary text-xl hover:text-gray-700 cursor-pointer"
              >
                X
              </div>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextModal;
