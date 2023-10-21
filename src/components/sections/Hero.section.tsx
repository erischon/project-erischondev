import Image from "next/image";
import Link from "next/link";

import { SiLinkedin, SiGithub } from "react-icons/si";

export default function HeroSection() {
  return (
    <section id="home" className="px-5 w-full py-20">
      <div className="grid md:grid-cols-12">
        <div className="col-span-6 ">
          <div className="flex flex-col mb-7">
            <p className="text-slate-300 text-lg">
              <span className="mr-2">Bonjour, je suis</span>
              <span className="text-xl text-amber-300 tracking-wider font-thin">
                Eri Schön
              </span>
            </p>
            <h2 className="text-5xl font-bold tracking-widest mb-7">
              Développeur Front-end
            </h2>
            <p className="text-slate-100/80">
              Je suis un Artisan Développeur spécialisé dans la confection
              d'applications web Fluides, Rapides et Fiables.
            </p>
          </div>

          <div className="flex gap-x-5 mb-10 items-center">
            <span>Me suivre :</span>

            <Link
              href="https://www.linkedin.com/in/ericschonhofen/"
              className="text-slate-400 text-xl hover:text-slate-400/70"
              target="_blank"
            >
              <SiLinkedin />
            </Link>

            <Link
              href="https://github.com/erischon"
              className="text-slate-400 text-xl hover:text-slate-400/70"
              target="_blank"
            >
              <SiGithub />
            </Link>
          </div>

          <div className="flex gap-x-10">
            <button className="bg-purple-600 text-slate-100 rounded-lg py-2 px-6 hover:text-slate-100/80 font-semibold">
              Me contacter
            </button>

            <button className="border-2 border-purple-600 text-slate-100 rounded-lg py-2 px-6 hover:text-slate-100/80 font-semibold">
              Mes Services
            </button>
          </div>
        </div>

        <div className="col-span-6">
          <Image
            src="/images/hero-dev.svg"
            width={375}
            height={375}
            alt="Developpeur Front-end"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
