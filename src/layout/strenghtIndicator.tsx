import { usePasswordGeneratorContext } from "../contexts";

export default function StrengthIndicator() {
  const { entropy } = usePasswordGeneratorContext();

  let level = 0; // Invalid
  let color = "";
  if (entropy >= 128) {
    level = 4; // 'Strong';
    color = "bg-green-200";
  } else if (entropy >= 60) {
    level = 3; // 'Medium'
    color = "bg-yellow-300";
  } else if (entropy >= 36) {
    level = 2; // 'Weak'
    color = "bg-orange-400";
  } else if (entropy >= 28) {
    level = 1; // 'Too Weak!'
    color = "bg-red-500";
  }

  const levelText = ["", "Too Weak!", "Weak", "Medium", "Strong"];

  return (
    <div className="bg-grey-850 mb-4 flex h-14 items-center gap-4 px-4 py-3.5 sm:mb-8 sm:h-18 sm:px-8 sm:py-5">
      <p className="text-grey-600 mr-auto text-[16px] uppercase sm:text-[18px]">
        Strength
      </p>
      <p className="text-[18px] text-white uppercase sm:text-[24px]">
        {levelText[level]}
      </p>
      <div className="flex h-full gap-2">
        <div
          className={`h-full w-2.5 ${level > 0 ? color : "border-2 border-white"}`}
        ></div>
        <div
          className={`h-full w-2.5 ${level > 1 ? color : "border-2 border-white"}`}
        ></div>
        <div
          className={`h-full w-2.5 ${level > 2 ? color : "border-2 border-white"}`}
        ></div>
        <div
          className={`h-full w-2.5 ${level > 3 ? color : "border-2 border-white"}`}
        ></div>
      </div>
    </div>
  );
}
