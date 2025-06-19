import { FC } from "react";
import { ServiceData } from "../types";

const ServicesSection: FC = () => {
  const services: ServiceData[] = [
    {
      title: "Full Mobile App Development",
      description: "Complete iOS & Android app development with React Native",
      icon: "📱",
    },
    {
      title: "Web Development",
      description: "Modern web applications with React.js & Next.js",
      icon: "🌐",
    },
    {
      title: "App Store Deployment",
      description:
        "Complete app deployment to Play Store & App Store with optimization",
      icon: "🚀",
    },
    {
      title: "Figma to Code",
      description:
        "Pixel-perfect conversion of designs to React Native & React.js",
      icon: "🎨",
    },
    {
      title: "Custom UI & Animation",
      description: "Smooth animations and interactive custom animations",
      icon: "✨",
    },
    {
      title: "In-app Purchases",
      description:
        "Integrate RevenueCat & in-app subscription for seamless payments",
      icon: "💳",
    },
    {
      title: "Authentication & Security",
      description:
        "AWS Amplify, Cognito & Clerk integration for secure user management",
      icon: "🔐",
    },
    {
      title: "Push Notifications & Offline",
      description: "Real-time notifications and offline-first app architecture",
      icon: "🔔",
    },
    {
      title: "Firebase Integration",
      description: "Real-time database, authentication & social messaging",
      icon: "🔥",
    },
    {
      title: "WebSocket & Real-time Chat",
      description: "Live messaging features with efficient data handling",
      icon: "💬",
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
          What I Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: ServiceData, index: number) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
