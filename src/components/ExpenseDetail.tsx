import { useMemo } from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import Icon from "@mdi/react";
import { mdiDelete, mdiReceiptTextEdit } from "@mdi/js";
import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";
import { formatCurrency, formatDate } from "../helpers";
import type { Expense } from "../types";
import "react-swipeable-list/dist/styles.css";

type ExpenseDetailProps = {
  expense: Expense;
};

export default function ExpenseDetail({ expense }: ExpenseDetailProps) {
  const { dispatch } = useBudget();
  const categoryInfo = useMemo(
    () => categories.filter((category) => category.id === expense.category)[0],
    [expense]
  );

  const leadingActions = () => {
    return (
      <LeadingActions>
        <SwipeAction
          onClick={() =>
            dispatch({ type: "update-expense", payload: { id: expense.id } })
          }
        >
          <Icon path={mdiReceiptTextEdit} size={1} />
          <p>Actualizar</p>
        </SwipeAction>
      </LeadingActions>
    );
  };

  const trailingActions = () => {
    return (
      <TrailingActions>
        <SwipeAction
          onClick={() =>
            dispatch({ type: "remove-expense", payload: { id: expense.id } })
          }
          destructive={true}
        >
          <Icon path={mdiDelete} size={1} />
          <p>Eliminar</p>
        </SwipeAction>
      </TrailingActions>
    );
  };

  return (
    <SwipeableList className="border border-zinc-200 rounded-lg transition-colors duration-300 ease-in-out dark:border-zinc-800">
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="expense-detail-gradient p-5 w-full flex justify-start items-center gap-5">
          <Icon path={categoryInfo.icon} size={3} />
          <div className="flex flex-col gap-1">
            <header className="flex justify-start gap-x-2.5 flex-wrap text-xl">
              <h3 className="capitalize font-semibold">{expense.name}:</h3>
              <p className="">{formatCurrency(expense.amount)}</p>
            </header>
            <p className="capitalize font-medium text-xl">
              {categoryInfo.name}
            </p>
            <p className="text-xs capitalize font-bold opacity-50">
              {formatDate(expense.date)}
            </p>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
}
