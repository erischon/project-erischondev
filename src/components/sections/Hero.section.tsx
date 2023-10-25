import Image from "next/image";
import Link from "next/link";

import { SiLinkedin, SiGithub } from "react-icons/si";

import Section from "@/components/Section";
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <Section id="home">
      <div className="grid md:grid-cols-12">
        <div className="order-2 md:col-span-6 md:order-1">
          <div className="flex flex-col mb-7">
            <p className="text-slate-300 text-lg mb-1">
              <span className="mr-2">Bonjour, je suis</span>
              <span className="text-xl text-amber-300 tracking-wider">
                Eri Schön
              </span>
            </p>

            <h2 className="text-4xl font-bold tracking-widest mb-7">
              Développeur Front-end
            </h2>

            <p className="text-slate-100/80">
              Je suis un Artisan Développeur spécialisé dans la confection
              d&apos;applications web{" "}
              <span className="text-slate-50">Fluides</span>,{" "}
              <span className="text-slate-50">Rapides</span> et{" "}
              <span className="text-slate-50">Fiables</span>.
            </p>
          </div>

          <div className="flex gap-x-5 mb-10 items-center">
            <span>Me suivre :</span>

            <Link
              href="https://www.linkedin.com/in/ericschonhofen/"
              className="text-slate-400 text-xl hover:text-slate-400/70"
              target="_blank"
              aria-label="Linkedin"
            >
              <SiLinkedin />
            </Link>

            <Link
              href="https://github.com/erischon"
              className="text-slate-400 text-xl hover:text-slate-400/70"
              target="_blank"
              aria-label="Github"
            >
              <SiGithub />
            </Link>
          </div>

          <div className="flex justify-between md:justify-start gap-x-5 md:gap-x-10">
            <Button>
              <Link href="/#rdv">Prendre RDV</Link>
            </Button>

            <button className="border-2 border-amber-400 text-slate-100 rounded-lg py-1 px-2 md:py-2 md:px-6 hover:text-slate-300 font-semibold">
              Mes Services
            </button>
          </div>
        </div>

        <div className="order-1 mb-5 md:col-span-6 md:order-2 md:mb-0">
          <Image
            src="/images/hero-dev.svg"
            width={375}
            height={375}
            alt="Developpeur Front-end"
            className="mx-auto"
            priority={true}
          />
        </div>
      </div>
    </Section>
  );
}
