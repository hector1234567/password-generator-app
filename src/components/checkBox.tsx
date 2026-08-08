import { useState } from "react";

type CheckBoxProps = {
  label: string;
  id: string;
  checked: boolean;
  setChecked: () => void;
};

export default function CheckBox({
  label,
  id,
  checked,
  setChecked,
}: CheckBoxProps) {
  return (
    <div className="mb-4.25 flex text-[16px] text-white sm:text-[18px]">
      <input
        type="checkbox"
        className="hidden"
        id={id}
        checked={checked}
        onChange={setChecked}
      />
      <label htmlFor={id} className="flex cursor-pointer items-center gap-4">
        <div
          className={`flex h-5 w-5 items-center justify-center border-2 border-green-200 transition-colors ${
            checked ? "bg-green-200" : "bg-grey-950"
          }`}
        >
          <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              className="stroke-grey-950"
              strokeWidth="3"
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
