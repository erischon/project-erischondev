import { specialities } from "@/data/specialities";
import { metrics } from "@/data/metrics";
import SectionTitle from "@/components/portfolio/SectionTitle";
import Section from "@/components/portfolio/Section";

export default function AboutSection() {
  return (
    <Section id="about">
      <SectionTitle>A propos</SectionTitle>

      <div className="md:grid md:grid-cols-12 gap-x-2 gap-y-5 mb-5 p-5  md:p-10 bg-slate-800">
        <div className="flex items-center gap-x-5 md:block md:col-span-3 mb-5 md:mb-0">
          <div className="mb-5 md:mb-0">
            <span className="text-8xl font-bold flex items-end">20+</span>
          </div>

          <div className="flex flex-col text-sm md:text-md tracking-widest font-bold justify-start text-slate-400">
            <span>ans</span>
            <span>d&apos;expériences</span>
            <span>professionnelles</span>
          </div>
        </div>

        <div className="md:col-span-9">
          <p className="flex flex-col gap-2 mb-10 ">
            <span>
              Bonjour, je suis Eri,{" "}
              <span className="font-semibold tracking-wider text-amber-400">
                Développeur Front-end React
              </span>{" "}
              Freelance en full remote.
            </span>

            <span>
              Je suis tombé dans l&apos;univers du Web en 1995 et depuis je ne
              l&apos;ai pas quitté.
            </span>

            <span>
              D&apos;
              <span className="font-semibold tracking-wider text-amber-400">
                Ad Ops
              </span>{" "}
              à{" "}
              <span className="font-semibold tracking-wider text-amber-400">
                Développeur Front-end
              </span>{" "}
              en passant par{" "}
              <span className="font-semibold tracking-wider text-amber-400">
                Project Manager
              </span>{" "}
              et{" "}
              <span className="font-semibold tracking-wider text-amber-400">
                Consultant Webmarketing
              </span>
              , j&apos;ai passé plus de 20 ans à travailler dans l&apos;univers
              du Web.
            </span>
          </p>

          <h3 className="mb-5 text-lg font-semibold">
            Le socle de ma pratique
          </h3>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-5">
            {specialities.map((speciality, k) => (
              <div
                key={k}
                className="flex flex-col gap-y-3 bg-slate-900/70 p-5 rounded-lg"
              >
                <div className="bg-amber-400 w-fit p-2 text-2xl text-slate-900 rounded-xl">
                  {speciality.icon}
                </div>
                <h3 className="font-semibold text-sm">{speciality.title}</h3>
                <p className="text-sm text-slate-100/80">
                  {speciality.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-4 gap-10 py-5 px-10 bg-slate-900">
        <p className="md:flex md:items-center text-lg font-semibold text-center md:text-left">
          En quelques chiffres
        </p>

        {metrics.map((metric, k) => (
          <div
            key={k}
            className="flex flex-col text-center p-5 bg-slate-800 rounded-lg"
          >
            <span className="text-3xl font-bold">{metric.metric}</span>
            <span className="text-sm">{metric.description}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
