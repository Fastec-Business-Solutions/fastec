import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatingButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message =
      "First Name: \nLast Name: \nEmail: \nPhone Number: \nBusiness Requirements: ";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      className="fixed z-50 left-0 bottom-[10%] rounded-r-full shadow-lg bg-primary-green sm:p-5 p-2 cursor-pointer"
      onClick={handleWhatsAppClick}
    >
      <FaWhatsapp className="text-white" size={40} />
    </div>
  );
};

export default WhatsAppFloatingButton;
