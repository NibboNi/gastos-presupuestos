import { PieChart } from "react-minimal-pie-chart";
import { useBudget } from "../hooks/useBudget";
import { formatCurrency } from "../helpers";
import AmoutDisplay from "./AmoutDisplay";
import { categories } from "../data/categories";
import React, { useState } from "react";

export default function BudgetTracker() {
  const [startX, setStartX] = useState(0);
  const { state, remainingBudget, totalExpenses, dispatch } = useBudget();

  const deg = ((remainingBudget * 360) / state.budget).toFixed(2);
  const percent = ((remainingBudget * 100) / state.budget).toFixed(2);

  const piePieces = categories.map((category) => ({
    title: category.name,
    value: state.expenses.reduce(
      (total, expense) =>
        category.id === expense.category ? total + expense.amount : total,
      0
    ),
    color: category.color,
  }));

  const expensesMade = piePieces.every((piece) => piece.value === 0);
  console.log(expensesMade);

  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.changedTouches[0];
    setStartX(touch.clientX);
  };

  const [position, setPosition] = useState(0);

  const handleTouchEnd = (event: React.TouchEvent) => {
    const touch = event.changedTouches[0];
    const endX = touch.clientX;

    const diffX = endX - startX;

    if (!expensesMade) {
      if (diffX > 50) setPosition(0);
      else if (diffX < -50) setPosition(1);
    }
  };

  return (
    <div className="mx-auto p-5 max-w-7xl grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="py-5 px-8 flex flex-col items-center bg-black text-white border border-transparent rounded-lg shadow-2xl transition-colors duration-300 ease-in-out dark:bg-zinc-950 dark:border-zinc-800 md:w-2/3 md:justify-self-end">
        <h2 className="text-xl font-medium">Presupuesto</h2>
        <p className="text-lg font-light">{formatCurrency(state.budget)}</p>
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex flex-col items-center justify-center bg-gradient-to-r from-black via-transparent to-black overflow-hidden dark:from-zinc-950 dark:to-zinc-950"
        >
          <div
            className={`w-48 h-48 flex items-center justify-start -translate-x-[${position}00%] transition-transform duration-300 ease-in-out`}
          >
            <div className="w-full h-full shrink-0 flex justify-center items-center">
              <div
                className="progress-bar mt-2.5 mx-auto h-32 w-32 relative rounded-full transition-all duration-300 ease-in-out"
                style={{
                  background: `conic-gradient(#1d4ed8 ${deg}deg, ${
                    +deg === 0 ? "#be185d" : "transparent"
                  } ${deg}deg)`,
                }}
              >
                <p className="absolute top-1/2 left-1/2 font-bold -translate-y-1/2 -translate-x-1/2">
                  {percent}%
                </p>
              </div>
            </div>
            {expensesMade ? null : (
              <div className="h-full w-full relative shrink-0 flex justify-center items-center">
                <div className="w-32 h-32">
                  <PieChart
                    data={piePieces}
                    paddingAngle={0}
                    rounded={true}
                    lineWidth={5}
                  />
                </div>
                <p className="absolute top-1/2 left-1/2 capitalize font-bold -translate-y-1/2 -translate-x-1/2">
                  gastos
                </p>
              </div>
            )}
          </div>
          {!expensesMade && (
            <div className="flex justify-center items-center gap-3">
              <button
                onClick={() => setPosition(0)}
                className={`h-2.5 w-2.5 rounded-full border border-zinc-800 transition-colors duration-300 ease-in-out ${
                  position === 0 ? "bg-white" : "bg-inherit"
                }`}
              ></button>
              <button
                onClick={() => setPosition(1)}
                className={`h-2.5 w-2.5 rounded-full border border-zinc-800 transition-colors duration-300 ease-in-out ${
                  position === 1 ? "bg-white" : "bg-inherit"
                }`}
              ></button>
            </div>
          )}
        </div>
      </div>
      <div className="p-5 flex flex-col items-start border rounded-lg shadow-md transition-colors duration-300 ease-in-out dark:bg-zinc-900 dark:border-zinc-800 md:w-2/3">
        <AmoutDisplay label="Presupuesto" amount={state.budget} />
        <AmoutDisplay label="Disponible" amount={remainingBudget} />
        <AmoutDisplay label="Gastado" amount={totalExpenses} />
      </div>
      <button
        onClick={() => dispatch({ type: "reset-app" })}
        className="mx-auto py-2 px-5 bg-zinc-950 text-white text-sm font-medium capitalize rounded transition-colors duration-300 ease-in-out hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed dark:bg-zinc-100 dark:text-black md:col-start-1 md:col-end-3 dark:hover:bg-white"
      >
        Resetear App
      </button>
    </div>
  );
}
