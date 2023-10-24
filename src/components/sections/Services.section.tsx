import Image from "next/image";

import { HiArrowSmRight } from "react-icons/hi";

import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";

import { services } from "@/data/services";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <Section id="services">
      <SectionTitle styles="mb-1 md:mb-4">Services</SectionTitle>

      <p className="text-sm text-slate-300 px-5 max-w-screen-md mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
        voluptates tempora iure vitae aliquid exercit ationem voluptatem porro.
      </p>

      <div className="md:grid md:grid-cols-2 my-5">
        <Image
          src="/images/services.svg"
          alt=""
          width={500}
          height={500}
          className="my-auto"
        />

        <div className="flex flex-col gap-3 md:grid md:grid-cols-2">
          {services.map((service, k) => (
            <div
              key={k}
              className="flex flex-col gap-2 bg-slate-800 rounded-md p-5 w-full"
            >
              <div className="text-2xl bg-slate-600 w-fit p-2 rounded-md">
                {service.icon}
              </div>

              <h3 className="text-amber-400 font-semibold md:text-sm">
                {service.name}
              </h3>

              <p className="text-slate-400 text-sm md:text-xs flex-1">
                {service.description}
              </p>

              <button className=" text-xs hover:text-amber-400 w-fit pt-2">
                <Link href="/" className="flex gap-2 items-center">
                  En savoir plus
                  <HiArrowSmRight />
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
