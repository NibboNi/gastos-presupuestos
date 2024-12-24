import { useState } from "react";
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
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, valueAsNumber } = event.target;

    if (type === "number") {
      if (valueAsNumber <= 0)
        setErrorMessage("La cantidad debe ser mayor a cero.");
      else if (value === "") setErrorMessage("Este campo es requerido.");
      else setErrorMessage("");
    } else {
      if (value === "") setErrorMessage("Este campo es requerido.");
      else setErrorMessage("");
    }

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
      <p
        className={`text-red-500 text-xs font-bold overflow-hidden transition-all duration-500 ease-in-out ${
          errorMessage !== "" ? "max-h-screen" : "max-h-0"
        }`}
      >
        {errorMessage}
      </p>
    </div>
  );
}
