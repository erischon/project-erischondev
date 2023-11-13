import Section from "@/components/portfolio/Section";
import SectionTitle from "@/components/portfolio/SectionTitle";

import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import test from "node:test";

export default function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <SectionTitle styles="mb-1 md:mb-4">Témoignages</SectionTitle>

      <p className="text-sm text-slate-300 px-5 max-w-screen-md mx-auto">
        Voici quelques témoignages de mes clients passés.
      </p>

      <div className="flex flex-col md:flex-row gap-3 py-10">
        {testimonials.map((testimonial, k) => (
          <div key={k} className="bg-slate-800 rounded-md p-5 w-full">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <div className="pr-2">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={42}
                    height={42}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-amber-400 font-semibold md:text-sm">
                    {testimonial.name}
                  </h3>

                  <p className="text-slate-300 text-xs md:text-xs flex-1">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-sm md:text-xs flex-1">
                {testimonial.quote}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
