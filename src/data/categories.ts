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
  { id: "1", name: "Ahorro", icon: mdiFinance },
  { id: "2", name: "Comida", icon: mdiSilverwareVariant },
  { id: "3", name: "Casa", icon: mdiHome },
  { id: "4", name: "Gastos Varios", icon: mdiWalletBifold },
  { id: "5", name: "Ocio", icon: mdiAccountMusic },
  { id: "6", name: "Salud", icon: mdiMedication },
  { id: "7", name: "Suscripciones", icon: mdiCreditCardClock },
];
