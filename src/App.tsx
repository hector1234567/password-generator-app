import CheckBox from "./components/checkBox";
import GenerateButton from "./components/generateButton";
import RangeInput from "./components/rangeInput";
import { PaswordGeneratorContext } from "./contexts";
import usePasswordGenerator from "./hooks/usePasswordGenerator";
import CharacterLengthDisplay from "./layout/characterLengthDisplay";
import IncludeOptions from "./layout/includeOptions";
import { PasswordDisplay } from "./layout/passwordDisplay";
import StrengthIndicator from "./layout/strenghtIndicator";

function App() {
  const passwordHook = usePasswordGenerator();

  return (
    <div className="from-grey-900 to-grey-950 flex min-h-dvh items-center justify-center bg-linear-to-r font-sans">
      <main className="mx-2 w-full max-w-112.5">
        <h1 className="text-grey-600 mb-4 text-center text-[16px]">
          Password Generator
        </h1>
        <PaswordGeneratorContext.Provider value={passwordHook}>
          <PasswordDisplay />
          <div className="bg-grey-800 p-4">
            <CharacterLengthDisplay />
            <RangeInput />
            <IncludeOptions />
            <StrengthIndicator />
            <GenerateButton />
          </div>
        </PaswordGeneratorContext.Provider>
      </main>
    </div>
  );
}

export default App;
