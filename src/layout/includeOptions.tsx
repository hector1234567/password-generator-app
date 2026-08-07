import { useContext } from "react";
import CheckBox from "../components/checkBox";
import { PaswordGeneratorContext } from "../contexts";

export default function IncludeOptions() {
  const {
    includeUppercase,
    setIncludeUppercase,
    includeLowercase,
    setIncludeLowercase,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
  } = useContext(PaswordGeneratorContext);

  return (
    <div className="mb-8">
      <CheckBox
        label="Include Uppercase Letters"
        id="upper"
        checked={includeUppercase}
        setChecked={() => setIncludeUppercase((ch) => !ch)}
      />
      <CheckBox
        label="Include Lowercase Letters"
        id="lower"
        checked={includeLowercase}
        setChecked={() => setIncludeLowercase((ch) => !ch)}
      />
      <CheckBox
        label="Include Numbers"
        id="nums"
        checked={includeNumbers}
        setChecked={() => setIncludeNumbers((ch) => !ch)}
      />
      <CheckBox
        label="Include Symbols"
        id="symb"
        checked={includeSymbols}
        setChecked={() => setIncludeSymbols((ch) => !ch)}
      />
    </div>
  );
}
