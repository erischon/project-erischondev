import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/Navbar";

export default function Header(): JSX.Element {
  return (
    <header className="fixed flex justify-between items-center py-5 w-full max-w-screen-xl bg-slate-900 px-5 border-b-2 border-slate-800 z-50">
      <div className="">
        <Link href="/" className="flex justify-center items-center gap-x-3">
          <Image
            src="/images/erischon-logo.svg"
            alt="logo"
            width={30}
            height={30}
          />

          <h2 className="text-xl font-light tracking-wider">Eri Schön</h2>
        </Link>
      </div>

      <Navbar />

      <button className="bg-purple-600 text-slate-100 py-2 px-4 rounded-lg">
        Prendre RDV
      </button>
    </header>
  );
}
