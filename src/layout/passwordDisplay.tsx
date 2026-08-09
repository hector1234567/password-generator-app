import { useState } from "react";
import { usePasswordGeneratorContext } from "../contexts";

export function PasswordDisplay() {
  const { password } = usePasswordGeneratorContext();

  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Can't copy:", err);
    }
  }

  return (
    <div className="bg-grey-800 mb-4 flex h-16 items-center gap-4 px-4 text-[24px] sm:h-20 sm:px-8 sm:text-[32px]">
      {password ? (
        <p className="mr-auto w-full shrink overflow-hidden text-nowrap text-ellipsis text-white">
          {password}
        </p>
      ) : (
        <p className="text-grey-700 mr-auto grow-0">P4$5W0rD!</p>
      )}
      {copied && (
        <p className="text-[16px] text-green-200 uppercase sm:text-[18px]">
          Copied
        </p>
      )}
      <button
        className="group w-5.25 shrink-0 cursor-pointer disabled:cursor-not-allowed"
        onClick={handleCopy}
        type="button"
        disabled={!password}
      >
        <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
            className="h-5 fill-green-200 group-hover:group-not-disabled:fill-white"
          />
        </svg>
        <span className="sr-only">Copy</span>
      </button>
    </div>
  );
}
