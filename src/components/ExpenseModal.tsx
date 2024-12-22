import Icon from "@mdi/react";
import { mdiWalletPlus } from "@mdi/js";
import { useBudget } from "../hooks/useBudget";
import ExpenseForm from "./ExpenseForm";

export default function ExpenseModal() {
  const { state, dispatch } = useBudget();

  return (
    <>
      <button
        onClick={() => dispatch({ type: "show-modal" })}
        className="ml-auto p-2.5 flex justify-center items-center bg-zinc-50 border border-zinc-200 rounded-xl shadow-xl transition-colors duration-300 ease-in-out hover:bg-white dark:bg-zinc-950 dark:border-zinc-800 dark:hover:bg-black"
      >
        <Icon path={mdiWalletPlus} size={1} />
      </button>
      {state.modal && (
        <div
          onClick={() => dispatch({ type: "hide-modal" })}
          className="p-5 h-screen w-screen absolute top-0 left-0 flex justify-center items-center bg-black/85 cursor-no-drop"
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
