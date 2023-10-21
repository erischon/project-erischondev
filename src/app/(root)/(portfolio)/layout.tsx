import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
