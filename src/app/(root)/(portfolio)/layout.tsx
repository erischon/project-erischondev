import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";

export default function layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
}
