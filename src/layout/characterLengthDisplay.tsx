import { useContext } from "react";
import { PaswordGeneratorContext } from "../contexts";

export default function CharacterLengthDisplay() {
  const { range } = useContext(PaswordGeneratorContext);

  return (
    <div className="mb-4 flex items-center justify-between">
      <p className="text-grey-200 text-[16px] sm:text-[18px]">
        Character Length
      </p>
      <p className="text-[24px] text-green-200 sm:text-[32px]">{range}</p>
    </div>
  );
}
