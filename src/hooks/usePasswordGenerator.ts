import { useState, useEffect } from "react";

export default function usePasswordGenerator() {
  const [range, setRange] = useState(10);

  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const [entropy, setEntropy] = useState(-Infinity);

  useEffect(() => {
    function calcEntropy() {
      let n = 0;
      if (includeUppercase) n += 26;
      if (includeLowercase) n += 26;
      if (includeNumbers) n += 10;
      if (includeSymbols) n += 32;

      setEntropy(range * Math.log2(n));
    }
    calcEntropy();
  }, [
    range,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  ]);

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
  };
}
