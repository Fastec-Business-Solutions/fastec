import type { FormInputData } from "../components/contactus/ContactUs";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const requestCallBack = async (
  data: FormInputData
): Promise<boolean> => {
  try {
    const response = await fetch(`${backendUrl}/api/email/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch (error) {
    console.error("Error in requestCallBack:", error);
    return false;
  }
};
