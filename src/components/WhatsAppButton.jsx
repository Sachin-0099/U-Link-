import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet"; 

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const whatsappNumber = "918750518844";
    const url = `https://wa.me/${whatsappNumber}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
     
      <Helmet>
        <title>Contact Us on WhatsApp | Ulink It Us</title>
        <meta
          name="description"
          content="Easily get in touch with our support team via WhatsApp for fast and efficient assistance. Click the WhatsApp button to chat with us instantly!"
        />
        <meta property="og:title" content="Contact Us on WhatsApp | Ulink It Us" />
        <meta
          property="og:description"
          content="Need help? Our team is just a WhatsApp message away. Click to connect with us instantly!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ulinkitus.com" />
        <meta property="og:image" content="https://ulinkitus.com/og-whatsapp-support.jpg" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {showButton && (
        <button
          onClick={handleClick}
          className="fixed bottom-28 right-7 bg-[#b73235] text-white rounded-full p-4 shadow-lg hover:bg-red-600 transition z-50"
          aria-label="Contact us on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp size={22} />
        </button>
      )}
    </>
  );
};

export default WhatsAppButton;
