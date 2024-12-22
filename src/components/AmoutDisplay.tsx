import { formatCurrency } from "../helpers";

type AmoutDisplayProps = {
  label: string;
  amount: number;
};

export default function AmoutDisplay({ label, amount }: AmoutDisplayProps) {
  return (
    <p className="py-2.5 w-full font-medium border-b border-b-zinc-300 transition-colors duration-300 ease-in-out last-of-type:border-b-0 dark:border-zinc-800">
      {label}: <span>{formatCurrency(amount)}</span>
    </p>
  );
}
