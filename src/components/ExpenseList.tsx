import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";

export default function ExpenseList() {
  const { state } = useBudget();
  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses]);
  const filteredExpenses = state.currentCategory
    ? state.expenses.filter(
        (expense) => expense.category === state.currentCategory
      )
    : state.expenses;

  return (
    <div className="w-full">
      {!isEmpty && (
        <>
          <header className="mb-5 pb-2.5 border-b border-zinc-200 transition-colors duration-300 ease-in-out dark:border-b-zinc-800">
            <h2 className="text-2xl font-extralight uppercase ">Mis gastos</h2>
          </header>
          <ul className="w-full">
            {filteredExpenses.map((expense) => (
              <li key={expense.id} className="pb-2.5 w-full last-of-type:pb-0">
                <ExpenseDetail key={expense.id} expense={expense} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
