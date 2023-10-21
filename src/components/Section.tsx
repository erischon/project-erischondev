export default function Section({
  children,
  id,
  styles = "",
}: {
  children: React.ReactNode;
  id: string;
  styles?: string;
}) {
  return (
    <section id={id} className={`${styles} pt-14 w-full`}>
      {children}
    </section>
  );
}
