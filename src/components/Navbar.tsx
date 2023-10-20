"use client";

import Link from "next/link";

import { routes } from "@/data/routes";

const getHash = () =>
  typeof window !== "undefined"
    ? decodeURIComponent(window.location.hash.replace("#", ""))
    : undefined;

/**
 * Renders a Navbar component.
 * @returns JSX.Element
 */
export default function Navbar(): JSX.Element {
  const pathname = `/#${getHash()}`;

  const activeStyle = "text-amber-400 border-b-2 border-amber-400";

  console.log(pathname);

  return (
    <nav>
      <ul className="flex gap-x-3">
        {routes.map((route: any) => (
          <li>
            <Link
              href={route.url}
              className={`text-lg font-semiBold hover:text-slate-300 ${
                pathname === route.url ? activeStyle : ""
              }`}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
