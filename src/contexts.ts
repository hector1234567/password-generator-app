import { createContext, useContext } from "react";
import type { UsePasswordGeneratorReturn } from "./hooks/usePasswordGenerator"; // ajusta el path

export const PasswordGeneratorContext = createContext<
  UsePasswordGeneratorReturn | undefined
>(undefined);

export function usePasswordGeneratorContext(): UsePasswordGeneratorReturn {
  const context = useContext(PasswordGeneratorContext);

  if (context === undefined) {
    throw new Error(
      "usePasswordGeneratorContext debe usarse dentro de un PasswordGeneratorProvider",
    );
  }

  return context;
}
