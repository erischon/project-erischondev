import Link from "next/link";

import { routes } from "@/data/routes";

export default function Navbar(): JSX.Element {
  return (
    <nav className="">
      <ul className="fixed bottom-0 left-0 md:hidden bg-slate-800 flex py-5 w-full justify-evenly">
        {routes.map((route: any, k) => (
          <li key={k}>
            <Link
              href={route.url}
              className={`text-3xl text-slate-100/70 hover:text-amber-400 hover:border-b-2 hover:border-amber-400`}
            >
              {route.icon}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="md:flex gap-x-3 hidden">
        {routes.map((route: any, k) => (
          <li key={k}>
            <Link
              href={route.url}
              className={`text-lg text-slate-100/70 hover:text-amber-400 hover:border-b-2 hover:border-amber-400`}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
