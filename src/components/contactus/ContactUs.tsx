import { useRef, useState } from "react";

import { BiRightArrowAlt } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";

import TopNotch from "../common/TopNotch";
import DynamicFormBuilder from "../common/DynamicFormBuilder";
import { Images } from "../../lib/utils/Images";
import { Icons } from "../../lib/utils/Icons";
import { requestCallBack } from "../../services/ContactService";

type FormField = {
  type: "text" | "email" | "tel" | "textarea";
  label: string;
  required: boolean;
  name: string;
};

export type FormInputData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  businessRequirements: string;
};

const formFields: FormField[] = [
  { type: "text", label: "First Name", required: true, name: "firstName" },
  { type: "text", label: "Last Name", required: true, name: "lastName" },
  { type: "email", label: "Email", required: true, name: "email" },
  { type: "tel", label: "Phone Number", required: true, name: "phoneNumber" },
  {
    type: "textarea",
    label: "Business Requirements",
    required: true,
    name: "businessRequirements",
  },
];

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data: FormInputData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      businessRequirements: formData.get("businessRequirements") as string,
    };

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
      "businessRequirements",
    ];
    const missingFields = requiredFields.filter(
      (field) => !data[field as keyof typeof data]?.trim()
    );

    if (missingFields.length > 0) {
      toast.error("Please fill all the fields", {
        position: "bottom-right",
      });
      setIsLoading(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Please enter a valid email address", {
        position: "bottom-right",
      });
      setIsLoading(false);
      return;
    }

    // Validate phone number format
    if (data.phoneNumber.length !== 10 || isNaN(Number(data.phoneNumber))) {
      toast.error("Please enter a valid phone number", {
        position: "bottom-right",
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await requestCallBack(data);
      if (!response) {
        toast.error("Failed to send your message. Please try again later.", {
          position: "bottom-right",
        });
      } else {
        toast.success(
          "Thank you for your message! We will get back to you soon.",
          {
            position: "bottom-right",
          }
        );
        formRef.current?.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "There was an error submitting your form. Please try again.",
        {
          position: "bottom-right",
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="contact-us"
      className="relative min-h-screen w-full flex items-center  lg:py-10 md:p-6 md:justify-center xl:px-5  max-[860px]:flex max-[860px]:flex-col py-5"
    >
      <img
        src={Images.ContactUsBackground.src}
        alt={Images.ContactUsBackground.alt}
        className="w-full h-full absolute top-0 left-0 -z-10 object-cover"
      />
      <div className="absolute left-0 bottom-0 w-full pointer-events-none">
        <img
          src={Images.BackgroundEffect.src}
          alt={Images.BackgroundEffect.alt}
          className="w-full"
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-evenly w-full">
        <div className="">
          <TopNotch isTransparent={true} />
          <h1 className="text-white text-center font-family-jakarta text-[24px] leading-tight mt-20 md:mt-10 md:text-[30px] xl:text-[52px] max-sm:mt-10">
            HELPING YOU GAIN A<br />
            <span className="font-family-jakarta font-bold md:font-[20px]">
              COMPETITIVE EDGE
            </span>
            <br />
            FOR YOUR BUSINESS
          </h1>
        </div>

        <div className="flex items-center lg:justify-end justify-center w-full">
          <p className=" text-white font-family-inter font-regular px-20 mt-10 md:px-6 md:text-[14px] lg:text-[16px] xl:text-[18px] xl:px-8 max-sm:text-[14px] max-sm:px-9">
            Leading your business journey with{" "}
            <span className="font-bold">expert guidance</span>,<br />
            <span className="font-bold">innovative solutions</span>, and a{" "}
            <span className="font-bold">steadfast commitment</span> to your
            <br />
            <span className="font-family-inter font-thin leading-[23px]">
              success at every stage.
            </span>
          </p>
        </div>
        <div className="flex w-full justify-center lg:justify-end max-sm:h-[60px]">
          <img src={Icons.Arrow.src} alt={Icons.Arrow.alt} />
        </div>
      </div>
      <div className="flex-1 min-[860px]:flex items-center justify-center w-full">
        <form
          ref={formRef}
          onSubmit={handleFormSubmit}
          className="w-[491px] max-[860px]:w-[60%] max-md:w-[80%] mx-auto max-sm:w-[90%] p-8 rounded-4xl bg-contact-us-gradient backdrop-blur-md font-family-jakarta text-white md:px-6"
        >
          <h2 className="font-family-jakarta font-bold text-2xl mb-8">
            Send Us a Message
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {formFields.map((field) => (
              <div
                key={field.label}
                className={`w-full ${
                  field.type === "textarea" ? "col-span-2" : ""
                }`}
              >
                <DynamicFormBuilder
                  key={field.label}
                  label={field.label}
                  type={field.type}
                  name={field.name}
                />
              </div>
            ))}
          </div>
          <div className="flex sm:justify-end justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="mt-4 w-auto cursor-pointer px-6 py-3 bg-gradient-secondary-to-primary text-white font-semibold rounded-full flex items-center gap-3 max-sm:mt-0 max-sm:px-5 max-sm:py-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Request Call Back"}
              <div className="w-8 h-8 bg-[#132E44] bg-opacity-20 rounded-full flex items-center justify-center">
                <BiRightArrowAlt className="w-5 h-5" />
              </div>
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ContactUs;
