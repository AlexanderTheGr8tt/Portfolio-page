import { FormData } from "@/components/ContactMe";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sendEmail(data: FormData) {
  try {
    const response = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Handle non-2xx status codes
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }

    const responseData = await response.json();
    // console.log(responseData.message);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Re-throw the error to indicate failure
  }
}
