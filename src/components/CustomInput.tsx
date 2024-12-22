import type { DraftExpense } from "../types";

type CustomInputProps = {
  label: string;
  id: string;
  type: string;
  value: string | number;
  placeholder?: string;
  setValue: React.Dispatch<React.SetStateAction<DraftExpense>>;
};

export default function CustomInput({
  label,
  id,
  type,
  value,
  placeholder = "",
  setValue,
}: CustomInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, valueAsNumber } = event.target;

    setValue((prev) => ({
      ...prev,
      [name]: type === "number" ? valueAsNumber : value,
    }));
  };

  return (
    <div className="pt-5 flex flex-col gap-1.5">
      <label htmlFor={id} className="text-lg font-light capitalize">
        {label}:
      </label>
      <input
        onChange={(e) => handleChange(e)}
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        className="py-1 px-2 bg-inherit border border-zinc-200 rounded-lg transition-colors duration-300 ease-in-out placeholder:text-sm placeholder:font-medium placeholder:opacity-50 focus:outline-none focus:border-black/65  dark:border-zinc-800 dark:focus:border-zinc-500"
      />
    </div>
  );
}
