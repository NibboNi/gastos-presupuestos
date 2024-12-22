import { useMemo } from "react";
import Icon from "@mdi/react";
import { categories } from "../data/categories";
import { formatCurrency, formatDate } from "../helpers";
import type { Expense } from "../types";

type ExpenseDetailProps = {
  expense: Expense;
};

export default function ExpenseDetail({ expense }: ExpenseDetailProps) {
  const categoryInfo = useMemo(
    () => categories.filter((category) => category.id === expense.category)[0],
    [expense]
  );

  return (
    <div className="p-5 flex justify-start items-center gap-5 border border-zinc-200 rounded-lg transition-colors duration-300 ease-in-out dark:border-zinc-800">
      <Icon path={categoryInfo.icon} size={3} />
      <div className="flex flex-col gap-1">
        <header className="flex justify-start gap-x-2.5 flex-wrap text-xl">
          <h3 className="capitalize font-semibold">{expense.name}:</h3>
          <p className="">{formatCurrency(expense.amount)}</p>
        </header>
        <p className="capitalize font-medium text-xl">{categoryInfo.name}</p>
        <p className="text-xs capitalize font-bold opacity-50">
          {formatDate(expense.date)}
        </p>
      </div>
    </div>
  );
}
