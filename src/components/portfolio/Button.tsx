type ButtonProps = {
  children: React.ReactNode;
  styles?: string;
};

export default function Button({ children, styles }: ButtonProps) {
  return (
    <button
      className={`bg-amber-400 text-slate-900 font-semibold py-1 px-2 md:py-2 md:px-4 rounded-md border-2 hover:border-2 border-amber-400 hover:bg-slate-900 hover:text-slate-300 transition-all ${styles}`}
    >
      {children}
    </button>
  );
}
