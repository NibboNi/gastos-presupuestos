import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

import { useBudget } from "../hooks/useBudget";
import { categories } from "../data/categories";

export default function FilterByCategory() {
  const { state, dispatch } = useBudget();

  return (
    <div className="w-full flex items-center gap-2.5 flex-wrap">
      <header className="shrink-0 flex items-center gap-2">
        <h2>Filtrar por: </h2>
        {categories.map(
          (category) =>
            category.id === state.currentCategory && (
              <button
                onClick={() =>
                  dispatch({ type: "add-filter-category", payload: { id: "" } })
                }
                type="button"
                className="py-0.5 px-2 flex justify-center items-center text-xs bg-zinc-950 text-white rounded-full transition-colors duration-300 ease-in-out dark:bg-zinc-900"
              >
                {category.name}
                <Icon path={mdiClose} size={0.5} />
              </button>
            )
        )}
      </header>
      <ul className="scrollbar-hidden shrink-0 w-full flex gap-1.5 overflow-x-scroll">
        {categories.map((category) => (
          <li
            key={category.id}
            className={`p-2.5 shrink-0 text-black  text-xs border border-zinc-800 rounded-full transition-colors duration-300 ease-in-out dark:text-white ${
              state.currentCategory === category.id
                ? "bg-zinc dark:bg-zinc-950"
                : "bg-zinc-200 dark:bg-zinc-800"
            }`}
          >
            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "add-filter-category",
                  payload: {
                    id:
                      state.currentCategory === category.id ? "" : category.id,
                  },
                })
              }
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
