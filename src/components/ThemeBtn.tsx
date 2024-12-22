import Icon from "@mdi/react";
import { mdiMoonWaxingCrescent, mdiWhiteBalanceSunny } from "@mdi/js";
import { useTheme } from "../hooks/useTheme";

export default function ThemeBtn() {
  const { theme, changeTheme } = useTheme();

  return (
    <button
      onClick={changeTheme}
      className="p-2.5 fixed bottom-10 right-5 flex justify-center items-center bg-zinc-50 border border-zinc-200 rounded-xl shadow-xl z-50 transition-colors duration-300 ease-in-out hover:bg-white dark:bg-zinc-950 dark:border-zinc-800 dark:hover:bg-black"
    >
      <Icon
        path={theme === "light" ? mdiMoonWaxingCrescent : mdiWhiteBalanceSunny}
        size={1}
      />
    </button>
  );
}
