import { usePasswordGeneratorContext } from "../contexts";

export default function RangeInput() {
  const { range, setRange } = usePasswordGeneratorContext();

  return (
    <>
      <input
        type="range"
        min="4"
        max="20"
        step="1"
        id="range"
        value={range}
        onChange={(ev) => setRange(+ev.target.value)}
        style={{
          backgroundImage: `linear-gradient(to right, var(--color-green-200) ${
            ((range - 4) * 100) / 16
          }%, var(--color-grey-950) ${((range - 4) * 100) / 16}%)`,
        }}
        className="[&::-webkit-slider-thumb]:hover:bg-grey-950 [&::-moz-range-thumb]:hover:bg-grey-950 mb-8 h-2 w-full cursor-pointer appearance-none rounded-lg accent-amber-500 transition-all [&::-moz-range-thumb]:h-[28px] [&::-moz-range-thumb]:w-[28px] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:hover:border-2 [&::-moz-range-thumb]:hover:border-green-200 [&::-webkit-slider-thumb]:h-[28px] [&::-webkit-slider-thumb]:w-[28px] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:hover:border-2 [&::-webkit-slider-thumb]:hover:border-green-200"
      />
      <label htmlFor="range" className="sr-only">
        Number of characterss in password
      </label>
    </>
  );
}
