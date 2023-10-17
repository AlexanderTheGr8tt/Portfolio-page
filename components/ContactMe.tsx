"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/utils";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactMe: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    await sendEmail(data);
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-laila text-secondary dark:text-primary"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full resize-none rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-700 py-3 px-6 text-base font-laila text-gray-700 dark:text-primary outline-none focus:border-purple-500 focus:shadow-md"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-laila text-secondary dark:text-primary"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full resize-none rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-700 py-3 px-6 text-base font-laila text-gray-700 dark:text-primary outline-none focus:border-purple-500 focus:shadow-md"
            {...register("email", { required: true })}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-laila text-secondary dark:text-primary"
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-700 py-3 px-6 text-base font-laila text-gray-700 dark:text-primary outline-none focus:border-purple-500 focus:shadow-md"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div>
          <button className="hover:shadow-form rounded-md py-3 px-8 text-base font-laila bg-secondary dark:bg-primary text-primary dark:text-secondary outline-none">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
