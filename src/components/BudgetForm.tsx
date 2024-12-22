import { useMemo, useState } from "react";
import { useBudget } from "../hooks/useBudget";

export default function BudgetForm() {
  const [budget, setBudget] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const { dispatch } = useBudget();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBudget = event.target.valueAsNumber;
    setBudget(newBudget);

    if (isNaN(newBudget) || newBudget <= 0)
      setErrorMessage("Introduzca un presupuesto valido.");
    else setErrorMessage("");
  };

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0;
  }, [budget]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: "add-budget", payload: { budget } });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto p-5 max-w-md flex flex-col items-start gap-5"
    >
      <div className="p-5 w-full flex flex-col items-start gap-2.5 border border-black/15 rounded-lg shadow-lg transition-colors duration-300 ease-in-out dark:border-zinc-800">
        <label htmlFor="budget" className="text-lg font-medium">
          Definir presupuesto
        </label>
        <input
          onChange={handleChange}
          id="budget"
          name="budget"
          type="number"
          value={budget}
          placeholder="Define tu presupuesto..."
          className="appearance-textfield py-1.5 px-3 w-full bg-inherit font-medium border border-zinc-200 rounded-lg transition-colors duration-300 ease-in-out focus:outline-none focus:border-black placeholder:text-sm placeholder:italic placeholder:font-light dark:border-zinc-800 dark:focus:border-zinc-500"
        />
        <p
          className={`text-red-500 text-xs font-bold overflow-hidden transition-all duration-500 ease-in-out ${
            errorMessage !== "" ? "max-h-screen" : "max-h-0"
          }`}
        >
          {errorMessage}
        </p>
        <input
          type="submit"
          value="Definir presupuesto"
          disabled={isValid}
          className="mx-auto py-2 px-5 bg-zinc-900 text-white text-sm font-medium capitalize rounded cursor-pointer transition-colors duration-300 ease-in-out hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
        />
      </div>
    </form>
  );
}
