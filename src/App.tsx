import CheckBox from "./components/checkBox";
import GenerateButton from "./components/generateButton";
import RangeInput from "./components/rangeInput";
import { PasswordDisplay } from "./layout/passwordDisplay";
import StrengthIndicator from "./layout/strenghtIndicator";

function App() {
  return (
    <div className="min-h-dvh bg-linear-to-r from-grey-900 to-grey-950 flex justify-center items-center font-sans">
      <main className="max-w-112.5 w-full">
        <h1 className="text-[16px] text-grey-600 mb-4 text-center">
          Password Generator
        </h1>
        <PasswordDisplay />
        <div className="bg-grey-800 p-4">
          <div className="flex justify-between items-center mb-[16px]">
            <p className="text-[16px] text-grey-200">Character Length</p>
            <p className="text-[24px] text-green-200">0</p>
          </div>
          <RangeInput />
          <div className="mb-8">
            <CheckBox label="Include Uppercase Letters" id="upper" />
            <CheckBox label="Include Lowercase Letters" id="lower" />
            <CheckBox label="Include Numbers" id="nums" />
            <CheckBox label="Include Symbols" id="symb" />
          </div>
          <StrengthIndicator />
          <GenerateButton />
        </div>
      </main>
    </div>
  );
}

export default App;
