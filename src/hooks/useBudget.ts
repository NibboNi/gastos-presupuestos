import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export const useBudget = () => {
  const context = useContext(BudgetContext);

  if (!context)
    throw new Error(
      "useBudget must be used within a BudgetProvider!\n¡useBudget debe utilizarse mediante un BudgetProvider!"
    );

  return context;
};
