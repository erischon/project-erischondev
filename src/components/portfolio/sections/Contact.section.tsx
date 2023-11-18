import Section from "@/components/portfolio/Section";
import SectionTitle from "@/components/portfolio/SectionTitle";

import { contactsInfo } from "@/data/contactsInfo";
import Button from "@/components/portfolio/Button";

export default function ContactSection() {
  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>

      <div className="flex flex-col-reverse md:flex-row w-full">
        <div className="md:w-5/12 p-5">
          <h3 className="text-lg font-semibold">Coordonnées</h3>

          <div className="flex flex-col w-full gap-5 py-5">
            {contactsInfo.map((contact, k) => (
              <div key={k} className="flex items-center gap-3">
                <div className="pr-5">{contact.icon}</div>

                <div>
                  <h4 className="text-sm text-slate-300">{contact.name}</h4>
                  <p className="">{contact.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="md:w-7/12 border-2 border-amber-400 p-5 rounded-lg"
          id="rdv"
        >
          <h3 className="text-lg font-semibold mb-3">Prendre rdv</h3>

          <p className="text-slate-300 pb-10 text-sm">
            Il n&apos;y a pas mieux qu&apos;un échange en direct pour partager
            sur votre projet et sur les besoins que vous avez.
          </p>

          <a href="https://calendly.com/erischon/contact" target="_blank">
            <Button styles="text-lg w-full">Prendre rdv</Button>
          </a>
        </div>
      </div>
    </Section>
  );
}
