import { useState, useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import Select from "./Select";
import CustomInput from "./CustomInput";
import type { DraftExpense } from "../types";

const initialExpense: DraftExpense = {
  name: "",
  amount: 0,
  category: "",
  date: "",
};

export default function ExpenseForm() {
  const [expense, setExpense] = useState<DraftExpense>(initialExpense);
  const { dispatch } = useBudget();
  const isValid = useMemo(() => {
    return Object.values(expense).includes("") || expense.amount <= 0;
  }, [expense]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({ type: "add-expense", payload: { expense } });
    setExpense(initialExpense);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <legend className="py-1 text-2xl text-center capitalize font-extralight border-b border-b-zinc-200 transition-colors duration-300 ease-in-out dark:border-b-zinc-800">
        Nuevo gasto
      </legend>
      <CustomInput
        id="name"
        label="nombre gasto"
        type="text"
        value={expense.name}
        placeholder="Añade nombre del gasto..."
        setValue={setExpense}
      />
      <CustomInput
        id="amount"
        label="cantidad"
        type="number"
        value={expense.amount}
        placeholder="Añade cantidad del gasto ej. 300..."
        setValue={setExpense}
      />
      <Select
        label="Tipo de gasto"
        value={expense.category}
        setValue={setExpense}
      />
      <CustomInput
        id="date"
        label="fecha de gasto"
        type="date"
        value={expense.date}
        setValue={setExpense}
      />
      <input
        type="submit"
        value="Registrar gasto"
        disabled={isValid}
        className="mt-5 mx-auto py-2 px-5 bg-zinc-950 text-white text-sm font-medium capitalize rounded cursor-pointer transition-colors duration-300 ease-in-out hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
      />
    </form>
  );
}
