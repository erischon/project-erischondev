import { specialities } from "@/data/specialities";
import { metrics } from "@/data/metrics";
import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/Section";

export default function AboutSection() {
  return (
    <Section id="about">
      <SectionTitle>About</SectionTitle>

      <div className="grid grid-cols-12 gap-x-2 gap-y-5 mb-5 px-10 py-10 bg-slate-800">
        <div className="col-span-3">
          <div className="mb-5">
            <span className="text-8xl font-bold flex items-end">20+</span>
          </div>

          <div className="flex flex-col text-xl tracking-widest font-bold justify-start">
            <span>Ans</span>
            <span>d&apos;expériences</span>
            <span>professionnelles</span>
          </div>
        </div>

        <div className="col-span-9">
          <p className="flex flex-col gap-2 mb-10 ">
            <span>
              Bonjour, je suis Eri, développeur Front-end Freelance en full
              remote.
            </span>
            <span>
              Je suis tombé dans l&apos;univers du Web en 1995 et depuis je ne
              l&apos;ai pas quitté.
            </span>

            <span>
              De Traffic Manager à Développeur Front-end en passant par Project
              Manager et Consultant Webmarketing j&apos;ai passé plus de 20 ans
              à travailler dans le Web.
            </span>
          </p>

          <div className="flex gap-x-5">
            {specialities.map((speciality, k) => (
              <div
                key={k}
                className="flex flex-col gap-y-2 bg-slate-900/70 p-5 rounded-lg"
              >
                <div className="bg-amber-400 w-fit p-2 text-2xl text-slate-900 rounded-xl">
                  {speciality.icon}
                </div>
                <h3 className="font-semibold">{speciality.title}</h3>
                <p className="text-sm text-slate-100/80">
                  {speciality.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10 py-10 px-10 bg-slate-900">
        <p className="flex items-center text-lg font-semibold">
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
