export default function SectionTitle({
  children,
  styles = "",
}: {
  children: React.ReactNode;
  styles?: string;
}) {
  return (
    <h2
      className={`text-4xl font-semibold mt-14 mb-8 md:mb-14 mx-auto pb-2 w-fit after:content-[''] after:block after:border-b-8 after:border-amber-400 after:w-16 after:mx-auto after:mt-3 ${styles}`}
    >
      {children}
    </h2>
  );
}
