import Image from "next/image";

import { HiArrowSmRight } from "react-icons/hi";

import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";

import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <Section id="services">
      <SectionTitle styles="mb-1 md:mb-4">Services</SectionTitle>

      <p className="text-sm text-slate-300 px-5 max-w-screen-md mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
        voluptates tempora iure vitae aliquid exercit ationem voluptatem porro.
      </p>

      <Image src="/images/services.svg" alt="" width={500} height={500} />

      <div className="flex flex-col gap-3">
        {services.map((service, k) => (
          <div key={k} className="flex flex-col gap-2 bg-slate-800 p-5">
            <div className="text-2xl bg-slate-600 w-fit p-2 rounded-md">
              {service.icon}
            </div>

            <h3 className="font-semibold">{service.name}</h3>

            <p className="text-slate-400 text-sm">{service.description}</p>

            <button className="flex gap-2 items-center text-xs hover:bg-slate-900 w-max">
              <span>En savoir plus</span>
              <HiArrowSmRight />
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
}
