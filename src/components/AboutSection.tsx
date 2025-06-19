import { FC } from "react";
import { Technology } from "../types";

const AboutSection: FC = () => {
  const technologies: Technology[] = [
    { name: "React Native", icon: "⚛️" },
    { name: "Next.js", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Expo", icon: "📱" },
    { name: "Firebase", icon: "🔥" },
    { name: "JavaScript", icon: "💛" },
    { name: "TypeScript", icon: "📘" },
    { name: "Payment Methods", icon: "💳" },
  ];
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gray-200 rounded-full overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I&apos;m a mobile app developer with 1+ years of experience in
              React Native and Expo. I specialize in building cross-platform
              apps with smooth UX, scalable architecture, and real-time
              features. Whether you need a dating app or a marketplace app, I
              help clients achieve UI Firebase integration, or in-app payments —
              I&apos;ll deliver production-ready code that feels native.
            </p>
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech: Technology, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg"
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span className="text-sm font-medium text-gray-700">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
