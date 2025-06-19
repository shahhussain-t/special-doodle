import { FC } from "react";
import { TestimonialData } from "../types";

const TestimonialsSection: FC = () => {
  const testimonials: TestimonialData[] = [
    {
      name: "Alex Johnson",
      role: "CEO",
      company: "TechStart",
      message:
        "Shah delivered exactly what we needed. The app feels fast and polished.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      role: "Product Manager",
      company: "InnovateCorp",
      message:
        "Highly reliable developer — responsive, communicative, and skillful.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
          Client Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial: TestimonialData, index: number) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.message}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-lg">👤</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
