"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/utils";
import SuccessErrModal from "./shared/SuccessErrModal";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

interface Props {
  labelName: string;
  labelEmail: string;
  labelMessage: string;
  button: string;
}

const ContactMe = ({ labelName, labelEmail, labelMessage, button }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);

  async function onSubmit(data: FormData) {
    try {
      await sendEmail(data);
      // If sendEmail is successful, show a success modal
      setSuccess(true);
    } catch (error) {
      // If sendEmail fails, show an error modal
      setError(true);
      console.log(error);
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 text-base font-mulish text-secondary dark:text-primary flex justify-between items-center"
          >
            {labelName}
            {""}
            <span>
              {""}{" "}
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}!</p>
              )}
            </span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full resize-none rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-700 py-3 px-6 text-base font-mulish text-gray-700 dark:text-primary outline-none focus:border-purple-500 focus:shadow-md shadow-lg dark:shadow-stone-900"
            {...register("name", { required: "Full Name is required" })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3  text-base font-mulish text-secondary dark:text-primary flex justify-between items-center"
          >
            {labelEmail}{" "}
            <span>
              {""}
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}!</p>
              )}
            </span>
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full resize-none rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-700 py-3 px-6 text-base font-mulish text-gray-700 dark:text-primary outline-none focus:border-purple-500 focus:shadow-md shadow-lg dark:shadow-stone-900"
            {...register("email", { required: "Email is required" })}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 text-base font-mulish text-secondary dark:text-primary flex justify-between items-center"
          >
            {labelMessage}{" "}
            <span>
              {" "}
              {errors.message && (
                <p className="text-red-500 text-sm ">
                  {errors.message.message}!
                </p>
              )}
            </span>
          </label>
          <textarea
            rows={4}
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-700 py-3 px-6 text-base font-mulish text-gray-700 dark:text-primary outline-none focus:border-purple-500 focus:shadow-md shadow-lg dark:shadow-stone-900"
            {...register("message", { required: "Message is required" })}
          ></textarea>
        </div>
        <div>
          <button className="hover:shadow-form rounded-md py-1 md:py-2 px-3 md:px-6 text-lg font-mulish bg-secondary dark:bg-primary text-primary hover:text-white dark:hover:text-black dark:text-secondary  outline-none cursor-pointer hover:bg-stone-700 dark:hover:bg-stone-400 shadow-xl dark:shadow-stone-900">
            {button}
          </button>
        </div>
      </form>
      <SuccessErrModal
        title="Success"
        message="Your message was successfully sent!"
        isModalOpen={isSuccess}
        setModalOpen={setSuccess}
      />
      <SuccessErrModal
        title="Something went wrong"
        message="If it happens again, here is my email: aleksandermalecki@hotmail.com"
        isModalOpen={isError}
        setModalOpen={setError}
      />
    </div>
  );
};

export default ContactMe;
