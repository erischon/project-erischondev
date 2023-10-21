import { specialities } from "@/data/specialities";
import { metrics } from "@/data/metrics";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 w-full">
      <h2 className="text-4xl my-14 mx-auto border-b-4 border-amber-400 pb-2 w-fit">
        About
      </h2>

      <div className="grid grid-cols-12 gap-x-2 gap-y-5 mb-5 px-10 py-10 bg-slate-800">
        <div className="col-span-3">
          <span className="text-8xl font-bold flex items-end">3+</span>
        </div>

        <p className="col-span-9">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          corrupti recusandae? Dolorem, reiciendis. Recusandae, optio tempore
          ipsa ad sed rem nisi dolore dolores, ducimus, possimus quis animi eius
          repellat quasi.
        </p>

        <div className="col-span-3 flex flex-col text-lg tracking-widest font-semibold justify-start">
          <span>Années</span>
          <span>d'expériences</span>
          <span>professionnelles</span>
        </div>

        <div className="col-span-9 flex gap-x-5">
          {specialities.map((speciality) => (
            <div className="flex flex-col gap-y-2 bg-slate-900 p-5">
              <div className="bg-amber-400 w-fit p-2 text-2xl text-slate-800 rounded-xl">
                {speciality.icon}
              </div>
              <h3 className="text-lg font-semibold">{speciality.title}</h3>
              <p className="text-sm text-slate-100/80">
                {speciality.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 py-10 px-10 bg-slate-900">
        {metrics.map((metric) => (
          <div className="flex flex-col text-center p-5 bg-slate-800">
            <span className="text-3xl font-bold">{metric.metric}</span>
            <span className="text-sm">{metric.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
