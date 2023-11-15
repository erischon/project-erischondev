import { FaRegHeart } from "react-icons/fa";

export default function Footer(): JSX.Element {
  return (
    <footer className="pb-20 pt-10 md:py-5 md:mt-20 w-full max-screen-xl mx-auto text-xs text-center md:text-start">
      <div className="flex flex-col gap-y-2 md:flex-row md:justify-between px-5 md:px-5 py-5 text-xs">
        <p className="flex gap-2">
          <span>© 2023-{new Date().getFullYear()}</span>
          <a
            href="https://www.erischon.dev"
            target="_blank"
            className="font-bold text-amber-400"
          >
            Eri Schön
          </a>
          <span>All rights reserved</span>
        </p>
        <p className="flex gap-2">
          <span>Made with</span>
          <FaRegHeart className="w-5 h-5 text-red-500" />
          <span>at Thiais</span>
        </p>
        <p className="flex gap-2">
          <span>Powered by</span>
          <span className="font-bold">Next.js</span>
        </p>
      </div>
    </footer>
  );
}
