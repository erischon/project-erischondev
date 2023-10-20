import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Renders the layout of the portfolio page with a header, children components, and a footer.
 * @param children - The child components to be rendered within the layout.
 * @returns The rendered layout component.
 */
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
