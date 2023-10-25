import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";

import { contactsInfo } from "@/data/contactsInfo";
import Button from "@/components/Button";

export default function ContactSection() {
  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>

      <div className="flex flex-col-reverse md:flex-row w-full">
        <div className="md:w-1/2 p-5">
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
          className="md:w-1/2 border-2 border-amber-400 p-5 rounded-lg"
          id="rdv"
        >
          <h3 className="text-lg font-semibold">Prendre rdv</h3>

          <p className="text-slate-300 pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>

          <Button styles="text-lg w-full">
            <a href="https://calendly.com/erischon/contact" target="_blank">
              Prendre rdv
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
