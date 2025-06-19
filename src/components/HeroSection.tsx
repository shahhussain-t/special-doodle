"use client";
import { FC } from "react";

const HeroSection: FC = () => {
  // WhatsApp functionality
  const openWhatsApp = () => {
    const phoneNumber = "923491303137";
    const message = encodeURIComponent(
      "Hi! I'm interested in discussing a mobile app project with you."
    );

    // Detect if mobile
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    const whatsappUrl = isMobile
      ? `https://wa.me/${phoneNumber}?text=${message}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  // Smooth scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Crafting Seamless Mobile Apps That Just Work.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              I'm Shah Hussain — a React Native developer helping startups and
              businesses bring their ideas to life across iOS & Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openWhatsApp}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>💬</span>
                Get In Touch via WhatsApp
              </button>
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View All Contact Options
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8">
              <div className="relative h-96 w-full">
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="bg-black rounded-3xl p-2 shadow-2xl">
                    <div className="bg-white rounded-2xl w-64 h-80 p-4">
                      <div className="grid grid-cols-4 gap-3 mt-8">
                        {Array.from({ length: 8 }, (_, i) => (
                          <div
                            key={i}
                            className={`w-12 h-12 rounded-xl ${
                              [
                                "bg-blue-500",
                                "bg-green-500",
                                "bg-red-500",
                                "bg-purple-500",
                                "bg-yellow-500",
                                "bg-pink-500",
                                "bg-indigo-500",
                                "bg-orange-500",
                              ][i]
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
