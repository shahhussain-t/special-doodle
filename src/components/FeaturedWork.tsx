import { FC } from "react";
import { ProjectData } from "../types";

const FeaturedWork: FC = () => {
  const project: ProjectData = {
    title: "Kwelta",
    description:
      "Kwelta is a community-driven app with support for 12 languages, private messaging, and global chat, in-app purchases, and payment features — all wrapped in a clean UI.",
    technologies: ["React Native", "Firebase", "Stripe", "Socket.io"],
    features: [
      "12 Languages Support",
      "Private Messaging",
      "Global Chat",
      "In-app Purchases",
      "Payment Integration",
    ],
    playStoreUrl: "#",
  };

  return (
    <section id="work" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
          Featured Work
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <span>📱</span>
                Play Store
              </button>
              <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                More Projects →
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-pink-100 to-blue-100 rounded-3xl p-8">
              <div className="relative h-96 w-full">
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="bg-black rounded-3xl p-2 shadow-2xl">
                    <div className="bg-white rounded-2xl w-64 h-80 p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-lg font-bold text-gray-900">
                          Kwelta
                        </div>
                        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="space-y-3">
                        {Array.from({ length: 4 }, (_, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                            <div className="flex-1">
                              <div className="h-3 bg-gray-200 rounded mb-1"></div>
                              <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                            </div>
                          </div>
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

export default FeaturedWork;
