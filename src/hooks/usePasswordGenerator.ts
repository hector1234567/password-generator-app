import { useState, type Dispatch, type SetStateAction } from "react";

export interface UsePasswordGeneratorReturn {
  range: number;
  setRange: Dispatch<SetStateAction<number>>;
  includeUppercase: boolean;
  setIncludeUppercase: Dispatch<SetStateAction<boolean>>;
  includeLowercase: boolean;
  setIncludeLowercase: Dispatch<SetStateAction<boolean>>;
  includeNumbers: boolean;
  setIncludeNumbers: Dispatch<SetStateAction<boolean>>;
  includeSymbols: boolean;
  setIncludeSymbols: Dispatch<SetStateAction<boolean>>;
  entropy: number;
  password: string;
  generatePassword: () => void;
}

const includedChars = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()-_=+[]{}|;:,.<>?",
};

export default function usePasswordGenerator(): UsePasswordGeneratorReturn {
  const [range, setRange] = useState<number>(10);

  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);

  const [password, setPassword] = useState<string>("");

  let n = 0;
  if (includeUppercase) n += includedChars.uppercase.length;
  if (includeLowercase) n += includedChars.lowercase.length;
  if (includeNumbers) n += includedChars.numbers.length;
  if (includeSymbols) n += includedChars.symbols.length;

  const entropy: number = range * Math.log2(n);

  function generatePassword(): void {
    let charset = "";
    if (includeUppercase) charset += includedChars.uppercase;
    if (includeLowercase) charset += includedChars.lowercase;
    if (includeNumbers) charset += includedChars.numbers;
    if (includeSymbols) charset += includedChars.symbols;

    if (charset.length === 0) {
      setPassword("");
      return;
    }

    const randomValues = new Uint32Array(range);
    crypto.getRandomValues(randomValues);

    const generated: string[] = [];
    for (let i = 0; i < range; i++) {
      const charIndex = randomValues[i] % charset.length;
      generated.push(charset[charIndex]);
    }

    setPassword(generated.join(""));
  }

  return {
    range,
    setRange,
    includeUppercase,
    setIncludeUppercase,
    includeLowercase,
    setIncludeLowercase,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
    entropy,
    password,
    generatePassword,
  };
}
