import { useBudget } from "../hooks/useBudget";
import { formatCurrency } from "../helpers";
import AmoutDisplay from "./AmoutDisplay";

export default function BudgetTracker() {
  const { state, remainingBudget, totalExpenses } = useBudget();

  return (
    <div className="mx-auto p-5 max-w-7xl grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="py-5 px-8 flex flex-col items-start bg-black text-white border border-transparent rounded-lg shadow-2xl transition-colors duration-300 ease-in-out dark:bg-zinc-950 dark:border-zinc-800 md:w-2/3 md:justify-self-end">
        <h2 className="text-xl font-medium">Presupuesto</h2>
        <p className="text-lg font-light">{formatCurrency(state.budget)}</p>
        <div className="mt-2.5 h-1.5 w-full relative bg-zinc-200 rounded-lg overflow-hidden transition-colors">
          <span
            className="absolute top-0 left-0 h-full bg-blue-700 transition-all duration-300 ease-in-out"
            style={{ width: `${(remainingBudget * 100) / state.budget}%` }}
          ></span>
        </div>
      </div>
      <div className="p-5 flex flex-col items-start border rounded-lg shadow-md transition-colors duration-300 ease-in-out dark:bg-zinc-900 dark:border-zinc-800 md:w-2/3">
        <AmoutDisplay label="Presupuesto" amount={state.budget} />
        <AmoutDisplay label="Disponible" amount={remainingBudget} />
        <AmoutDisplay label="Gastado" amount={totalExpenses} />
      </div>
      <button className="mx-auto py-2 px-5 bg-zinc-950 text-white text-sm font-medium capitalize rounded transition-colors duration-300 ease-in-out hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed dark:bg-zinc-100 dark:text-black md:col-start-1 md:col-end-3 dark:hover:bg-white">
        Resetear App
      </button>
    </div>
  );
}
