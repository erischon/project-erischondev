import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eri Schön - Le Blog",
  description: "Eri Schön - Le Blog",
};

export default function layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="min-h-screen">
      <div className="md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl my-auto px-10 sm:px-20">
        {children}
      </div>
    </div>
  );
}
