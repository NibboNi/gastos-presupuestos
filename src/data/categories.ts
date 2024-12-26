import {
  mdiHome,
  mdiFinance,
  mdiMedication,
  mdiAccountMusic,
  mdiWalletBifold,
  mdiCreditCardClock,
  mdiSilverwareVariant,
} from "@mdi/js";
import type { Category } from "../types";

export const categories: Category[] = [
  { id: "1", name: "Ahorro", icon: mdiFinance, color: "#ea580c" },
  { id: "2", name: "Comida", icon: mdiSilverwareVariant, color: "#facc15" },
  { id: "3", name: "Casa", icon: mdiHome, color: "#f472b6" },
  { id: "4", name: "Gastos Varios", icon: mdiWalletBifold, color: "#a3e635" },
  { id: "5", name: "Ocio", icon: mdiAccountMusic, color: "#2563eb" },
  { id: "6", name: "Salud", icon: mdiMedication, color: "#7c3aed" },
  {
    id: "7",
    name: "Suscripciones",
    icon: mdiCreditCardClock,
    color: "#ec4899",
  },
];
