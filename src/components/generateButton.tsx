import { usePasswordGeneratorContext } from "../contexts";

export default function GenerateButton() {
  const {
    generatePassword,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  } = usePasswordGeneratorContext();

  return (
    <button
      className="hover:not-disabled:bg-grey-800 group text-grey-800 flex h-14 w-full cursor-pointer items-center justify-center gap-4 border-2 border-green-200 bg-green-200 text-[16px] uppercase transition-colors disabled:cursor-not-allowed sm:text-[18px]"
      onClick={generatePassword}
      type="button"
      disabled={
        !includeUppercase &&
        !includeLowercase &&
        !includeNumbers &&
        !includeSymbols
      }
    >
      <span className="group-hover:group-not-disabled:text-green-200">
        Generate
      </span>
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <path
          className="fill-grey-800 group-hover:group-not-disabled:fill-green-200"
          d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
        />
      </svg>
    </button>
  );
}
