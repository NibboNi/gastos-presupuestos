import { useMemo } from "react";
import { useBudget } from "./hooks/useBudget";
import BudgetForm from "./components/BudgetForm";
import ThemeBtn from "./components/ThemeBtn";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";

export default function App() {
  const { state } = useBudget();

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  return (
    <>
      <header>
        <h1 className="mx-auto p-5 max-w-7xl text-center text-2xl capitalize font-bold">
          Planificador de gastos
        </h1>
      </header>
      <main>{isValidBudget ? <BudgetTracker /> : <BudgetForm />}</main>
      {isValidBudget && (
        <div className="mx-auto p-5 max-w-7xl flex">
          <ExpenseModal />
        </div>
      )}
      <ThemeBtn />
    </>
  );
}
