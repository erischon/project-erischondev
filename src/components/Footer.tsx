export default function Footer(): JSX.Element {
  return (
    <footer className="px-10 py-10 w-full max-w-5xl mx-auto text-xs text-center md:text-start">
      <p className=" ">
        © 2023-{new Date().getFullYear()}{" "}
        <a
          href="https://www.erischon.dev"
          target="_blank"
          className="text-bold text-slate-300 underline hover:text-slate-50"
        >
          {" "}
          Eri Schön
        </a>{" "}
        All rights reserved
      </p>
    </footer>
  );
}
