import Link from "next/link";

import { routes } from "@/data/routes";

export default function Navbar(): JSX.Element {
  return (
    <nav>
      <ul className="flex gap-x-3">
        {routes.map((route: any, k) => (
          <li key={k}>
            <Link
              href={route.url}
              className={`text-lg font-semiBold hover:text-amber-400 hover:border-b-2 hover:border-amber-400`}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
