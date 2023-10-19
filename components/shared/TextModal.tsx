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
          <div className="bg-secondary dark:bg-primary text-primary dark:text-secondary rounded">
            <p className="mx-5 my-5 font-laila text-sm md:text-base lg:text-lg max-w-lg md:max-w-xl pb-3">
              {p1}
              <br />
              <br />
              {p2}
              <br />
              <br />
              {p3}
              <br />
              <br />
              {p4}
              <br />
              <br />

              <div className="flex justify-center bg-white shadow-lg rounded-lg">
                <button
                  onClick={closeModal}
                  className="absolute m-2 text-primary dark:text-secondary text-xl hover:text-gray-700 cursor-pointer"
                >
                  X
                </button>
              </div>
              <br />
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextModal;
