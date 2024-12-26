export type Expense = {
  id: string;
  name: string;
  amount: number;
  category: string;
  date: string;
};

export type DraftExpense = Omit<Expense, "id">;

export type Category = {
  id: string;
  name: string;
  icon: string;
  color: string;
};
