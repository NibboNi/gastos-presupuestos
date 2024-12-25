import ThemeBtn from "./ThemeBtn";

export default function Footer() {
  return (
    <footer className="border-t border-t-zinc-200 transition-colors duration-300 ease-in-out dark:border-t-zinc-800">
      <div className="mx-auto p-5 max-w-md flex justify-between items-start flex-wrap">
        <a
          href="https://github.com/NibboNi/gastos-presupuestos"
          className="font-light text-blue-700 hover:text-blue-600"
        >
          repo
        </a>
        <ThemeBtn />
        <p className="w-full text-xs text-center font-medium opacity-75">
          2024&copy;
        </p>
      </div>
    </footer>
  );
}
