import type { ReactNode } from "react";
import { PasswordGeneratorContext } from "../contexts";
import usePasswordGenerator from "../hooks/usePasswordGenerator";

export function PasswordGeneratorProvider({
  children,
}: {
  children: ReactNode;
}) {
  const passwordGenerator = usePasswordGenerator();

  return (
    <PasswordGeneratorContext.Provider value={passwordGenerator}>
      {children}
    </PasswordGeneratorContext.Provider>
  );
}
