import { useState } from "react";

export default function RangeInput() {
  const [range, setRange] = useState(10);

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
      className=" w-full h-2 rounded-lg appearance-none cursor-pointer
    bg-grey-950 accent-amber-500

    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:w-[28px]
    [&::-webkit-slider-thumb]:h-[28px]
    [&::-webkit-slider-thumb]:bg-white
    [&::-webkit-slider-thumb]:hover:bg-grey-950
    [&::-webkit-slider-thumb]:hover:border-2
    [&::-webkit-slider-thumb]:hover:border-green-200
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:cursor-pointer

    [&::-moz-range-thumb]:w-[28px]
    [&::-moz-range-thumb]:h-[28px]
    [&::-moz-range-thumb]:bg-white
    [&::-moz-range-thumb]:hover:bg-grey-950
    [&::-moz-range-thumb]:hover:border-2
    [&::-moz-range-thumb]:hover:border-green-200
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:cursor-pointer
    [&::-moz-range-thumb]:border-none
    mb-[32px]"
    />
  );
}
