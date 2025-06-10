import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Copyright, MapPin } from "lucide-react";

import DubaiMap from './DubaiMap';
import OfficeInfo from "./OfficeInfo";
import QuickLinks from './QuickLinks';
import NewsletterForm from "./NewsletterForm";
import BackToTop from "./BackToTop";
import SocialFollow from "./SocialFollow";

const FooterSection = () => {
  const { t } = useTranslation();
  const [currentYear] = useState(new Date().getFullYear());
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navigateToPage = (page) => {
    const routes = {
      home: "/",
      services: "/services",
      aboutus: "/aboutus",
      portfolio: "/portfolio",
      blog: "/blog"
    };
    
    if (routes[page]) {
      window.location.href = routes[page];
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (!isMounted) return null;

  return (
    <footer
      ref={containerRef}
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-12 md:py-16 relative overflow-hidden"
      role="contentinfo"
      aria-label="Footer section"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5" aria-hidden="true">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#b73235] blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {/* India Office */}
          <motion.div variants={itemVariants} role="region" aria-labelledby="india-office">
            <OfficeInfo
              title={t("Corporate Office")}
              address={t("Uttam Nagar, New Delhi")}
              phone="+91-8750518844"
              email="dhiraj@ulinkit.com"
              website="https://www.ulinkgulf.com"
            />
          </motion.div>

          {/* UAE Office */}
          <motion.div variants={itemVariants} className="space-y-4" role="region" aria-labelledby="uae-office">
            <h3 id="uae-office" className="text-lg font-semibold text-[#b73235] dark:text-white flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="w-5 h-5 text-[#b73235]" aria-hidden="true" />
              </motion.div>
              {t("UAE Office")}
            </h3>
            <h4 className="text-md font-medium text-gray-600 dark:text-gray-300">
              {t("Where to find us")}
            </h4>
            <DubaiMap />
            <div className="space-y-2 text-gray-500 dark:text-gray-400">
              <motion.p whileHover={{ x: 5 }}>{t("P.O. Box: 624498, Street 13")}</motion.p>
              <motion.p whileHover={{ x: 5 }}>{t("Umm Ramool, Dubai - U.A.E")}</motion.p>
              <motion.p whileHover={{ x: 5 }}>
                <a href="tel:+918750518844" className="hover:text-[#b73235] underline" aria-label="Call India contact">
                  {t("Dhiraj Kumar Gupta(Director):  +91-8750518844,+971 58 586 8470")}
                </a>
              </motion.p>
           
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} role="navigation" aria-label="Footer Quick Links">
            <QuickLinks navigateToPage={navigateToPage} />
          </motion.div>

          {/* Newsletter / Social */}
          <motion.div variants={itemVariants} role="region" aria-label="Follow us or Subscribe">
            {/* <NewsletterForm /> */}
            <SocialFollow />
          </motion.div>
        </motion.div>

        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
  <strong>Visit our global sites:</strong><br />
  <a href="https://ulinkit.com" target="_blank" rel="noopener noreferrer" className="text-[#b73235] hover:underline mx-1">Ulinkit</a> |
  <a href="https://ulinkgulf.com" target="_blank" rel="noopener noreferrer" className="text-[#b73235] hover:underline mx-1">UlinkGulf</a> |
  <a href="https://ulinkitus.com" target="_blank" rel="noopener noreferrer" className="text-[#b73235] hover:underline mx-1">Ulinkitus</a>
</div>


        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-1"
          role="contentinfo"
        >
          <div className="flex items-center">
            <Copyright className="w-4 h-4 mr-1" aria-hidden="true" />
            <span>{currentYear} {t("U-Link Gulf. All rights reserved.")}</span>
          </div>
          <div className="hidden sm:block mx-2" aria-hidden="true">•</div>
          <div>{t("Designed with ❤️ in Dubai")}</div>
        </motion.div>
      </div>

      <BackToTop />
    </footer>
  );
};

export default FooterSection;
