import GenerateButton from "./components/generateButton";
import RangeInput from "./components/rangeInput";
import CharacterLengthDisplay from "./layout/characterLengthDisplay";
import IncludeOptions from "./layout/includeOptions";
import { PasswordDisplay } from "./layout/passwordDisplay";
import StrengthIndicator from "./layout/strenghtIndicator";
import { PasswordGeneratorProvider } from "./providers/passwordGeneratorProvider";

function App() {
  return (
    <div className="from-grey-900 to-grey-950 flex min-h-dvh items-center justify-center bg-linear-to-r font-sans">
      <main className="m-2 w-full max-w-112.5 sm:m-4 sm:max-w-135">
        <h1 className="text-grey-600 mb-4 text-center text-[16px] sm:mb-8 sm:text-[24px]">
          Password Generator
        </h1>
        <PasswordGeneratorProvider>
          <PasswordDisplay />
          <div className="bg-grey-800 p-4">
            <CharacterLengthDisplay />
            <RangeInput />
            <IncludeOptions />
            <StrengthIndicator />
            <GenerateButton />
          </div>
        </PasswordGeneratorProvider>
      </main>
    </div>
  );
}

export default App;
