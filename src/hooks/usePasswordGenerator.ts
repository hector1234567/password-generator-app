import { useState } from "react";

export default function usePasswordGenerator() {
  const [range, setRange] = useState(10);

  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const [password, setPassword] = useState("");

  let n = 0;
  if (includeUppercase) n += 26;
  if (includeLowercase) n += 26;
  if (includeNumbers) n += 10;
  if (includeSymbols) n += 32;

  const entropy = range * Math.log2(n);

  function generatePassword() {
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()-_=+[]{}";

    const password = [];
    for (let i = 0; i < range; i++) {
      const charIndex = Math.floor(Math.random() * charset.length);
      password.push(charset[charIndex]);
    }

    setPassword(password.join(""));
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
