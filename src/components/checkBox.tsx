import { useState } from "react";

type CheckBoxProps = {
  label: string;
  id: string;
};

export default function CheckBox({ label, id }: CheckBoxProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="text-[16px] text-white mb-4.25 flex">
      <input
        type="checkbox"
        className="hidden"
        id={id}
        checked={checked}
        onChange={() => setChecked((ch) => !ch)}
      />
      <label htmlFor={id} className="cursor-pointer flex items-center gap-4">
        <div className="w-5 h-5 border-2 border-green-200 flex justify-center items-center">
          <svg
            width="14"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
            className={`${!checked && "hidden"}`}
          >
            <path
              className="stroke-green-200"
              stroke-width="3"
              fill="none"
              d="M1 5.607 4.393 9l8-8"
            />
          </svg>
        </div>
        <span>{label}</span>
      </label>
    </div>
  );
}
