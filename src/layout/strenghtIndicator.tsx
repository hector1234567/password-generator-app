import { useContext } from "react";
import { PaswordGeneratorContext } from "../contexts";

export default function StrengthIndicator() {
  const { entropy } = useContext(PaswordGeneratorContext);

  let level = 0;
  let color = "";
  if (entropy >= 128) {
    level = 4; // 'Very strong';
    color = "bg-green-200";
  } else if (entropy >= 60) {
    level = 3; // 'Strong'
    color = "bg-yellow-300";
  } else if (entropy >= 36) {
    level = 2; // 'Medium'
    color = "bg-orange-400";
  } else if (entropy >= 28) {
    level = 1; // 'Weak'
    color = "bg-red-500";
  }

  const levelText = ["", "Too Weak!", "Weak", "Medium", "Strong"];

  return (
    <div className="bg-grey-850 mb-4 flex h-14 items-center gap-4 px-4 py-3.5">
      <p className="text-grey-600 mr-auto text-[16px] uppercase">Strength</p>
      <p className="text-[24px] text-white uppercase">{levelText[level]}</p>
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
