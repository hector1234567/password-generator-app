import { useContext } from "react";
import { PaswordGeneratorContext } from "../contexts";

export default function RangeInput() {
  const { range, setRange } = useContext(PaswordGeneratorContext);

  return (
    <input
      type="range"
      min="0"
      max="20"
      step="1"
      value={range}
      onChange={(ev) => setRange(+ev.target.value)}
      style={{
        backgroundImage: `linear-gradient(to right, var(--color-green-200) ${
          range * 5
        }%, var(--color-grey-950) ${range * 5}%)`,
      }}
      className="[&::-webkit-slider-thumb]:hover:bg-grey-950 [&::-moz-range-thumb]:hover:bg-grey-950 mb-[32px] h-2 w-full cursor-pointer appearance-none rounded-lg accent-amber-500 transition-all [&::-moz-range-thumb]:h-[28px] [&::-moz-range-thumb]:w-[28px] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:hover:border-2 [&::-moz-range-thumb]:hover:border-green-200 [&::-webkit-slider-thumb]:h-[28px] [&::-webkit-slider-thumb]:w-[28px] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:hover:border-2 [&::-webkit-slider-thumb]:hover:border-green-200"
    />
  );
}
