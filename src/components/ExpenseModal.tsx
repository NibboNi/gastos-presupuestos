import Icon from "@mdi/react";
import { mdiWalletPlus } from "@mdi/js";
import { useBudget } from "../hooks/useBudget";
import ExpenseForm from "./ExpenseForm";

export default function ExpenseModal() {
  const { state, dispatch } = useBudget();

  const handleOpenForm = () => {
    const root = document.documentElement;
    dispatch({ type: "show-modal" });
    root.classList.add("no-scroll");
  };

  const handleCloseForm = () => {
    const root = document.documentElement;
    dispatch({ type: "hide-modal" });
    root.classList.remove("no-scroll");
  };

  return (
    <>
      <button
        onClick={handleOpenForm}
        className="p-2.5 self-center flex justify-center items-center bg-zinc-50 border border-zinc-200 rounded-xl shadow-xl transition-colors duration-300 ease-in-out hover:bg-white dark:bg-zinc-950 dark:border-zinc-800 dark:hover:bg-black"
      >
        <Icon path={mdiWalletPlus} size={1} />
      </button>
      {state.modal && (
        <div
          onClick={handleCloseForm}
          className="p-5 h-screen w-screen fixed top-0 left-0 flex justify-center items-center bg-black/85 cursor-no-drop z-50"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="animate-height w-full max-w-lg bg-zinc-50 border border-zinc-200 rounded-lg overflow-hidden cursor-auto transition-all duration-300 ease-in-out dark:bg-zinc-950 dark:border-zinc-800"
          >
            <ExpenseForm />
          </div>
        </div>
      )}
    </>
  );
}
