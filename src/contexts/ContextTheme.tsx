import { createContext } from "react";
import type { ThemeContextType } from "../types/Theme";


export const ContextTheme = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {}
});
