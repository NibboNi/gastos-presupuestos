import { useEffect, useMemo } from "react";
import { useBudget } from "./hooks/useBudget";
import BudgetForm from "./components/BudgetForm";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";
import ExpenseList from "./components/ExpenseList";
import FilterByCategory from "./components/FilterByCategory";
import Footer from "./components/Footer";

export default function App() {
  const { state } = useBudget();

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  useEffect(() => {
    localStorage.setItem("budget", state.budget.toString());
    localStorage.setItem("expenses", JSON.stringify(state.expenses));
  }, [state]);

  return (
    <>
      <header>
        <h1 className="mx-auto p-5 max-w-7xl text-center text-2xl capitalize font-bold">
          Planificador de gastos
        </h1>
      </header>
      <main>{isValidBudget ? <BudgetTracker /> : <BudgetForm />}</main>
      {isValidBudget && (
        <div className="mx-auto p-5 max-w-xl flex flex-col items-start gap-5">
          <ExpenseModal />
          {state.expenses.length > 0 && (
            <>
              <FilterByCategory />
              <ExpenseList />
            </>
          )}
        </div>
      )}
      <Footer />
    </>
  );
}
