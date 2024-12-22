import { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import { categories } from "../data/categories";
import type { DraftExpense } from "../types";

type SelectProps = {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<DraftExpense>>;
};

export default function Select({ label, value, setValue }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusIndex, setFocusIndex] = useState<number | null>(null);

  const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen((prev) => !prev);
  };
  const closeDropdown = () => setIsOpen(false);

  const handleOptionSelect = (updatedOption: string) => {
    setValue((prev) => ({ ...prev, category: updatedOption }));
    closeDropdown();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen) return;

    if (event.key === "ArrowDown") {
      setFocusIndex((prev) =>
        prev === null || prev === categories.length - 1 ? 0 : prev + 1
      );
    } else if (event.key === "ArrowUp") {
      setFocusIndex((prev) =>
        prev === null || prev === 0 ? categories.length - 1 : prev - 1
      );
    } else if (event.key === "Enter" && focusIndex !== null) {
      event.preventDefault();
      handleOptionSelect(categories[focusIndex].name);
    } else if (event.key === "Escape") {
      closeDropdown();
    }
  };

  const handleClick = (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="pt-5 flex flex-col gap-1.5">
      <label
        onClick={(e) => handleClick(e)}
        id="expenseCategory-label"
        htmlFor="expenseCategory"
        className="text-lg font-light capitalize"
      >
        {label}:
      </label>
      <div
        id="expenseCategory"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="expenseCategory-label"
        className="relative flex flex-col items-start gap-1"
      >
        <button
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
          aria-controls="expenseCategory-options"
          className={`py-1 px-2 w-full bg-inherit text-center capitalize border border-zinc-200 rounded-lg transition-colors duration-300 ease-in-out placeholder:text-sm placeholder:font-medium placeholder:opacity-50 focus:outline-none focus:border-black/65  dark:border-zinc-800 dark:focus:border-zinc-500 ${
            isOpen ? "border-black/65 dark:border-zinc-500" : ""
          }`}
        >
          {value === ""
            ? "seleccione una categoría"
            : categories[parseInt(value) - 1].name}
        </button>
        <ul
          id="expenseCategory-options"
          role="listbox"
          className={`px-1 w-full flex flex-col justify-start border-black/65 rounded-lg overflow-hidden transition-all duration-300 ease-in-out dark:border-zinc-500 ${
            isOpen ? "max-h-screen py-1 border" : "max-h-0"
          }`}
        >
          {categories.map((category, index) => (
            <li
              key={category.id}
              role="option"
              aria-selected={focusIndex === index}
              onClick={() => handleOptionSelect(category.id)}
              onMouseEnter={() => setFocusIndex(index)}
              className={`py-1.5 p-1 w-full flex justify-between rounded transition-colors duration-300 ease-in-out hover:bg-zinc-200 dark:hover:bg-zinc-800 ${
                focusIndex === index ? "bg-zinc-300 dark:bg-zinc-700" : ""
              }`}
            >
              {category.name}
              <Icon path={category.icon} size={1} />
            </li>
          ))}
        </ul>
        <Icon
          path={mdiChevronDown}
          size={1}
          className={`absolute top-1 right-1 -z-10 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
    </div>
  );
}
