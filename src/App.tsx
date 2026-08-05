function App() {
  return (
    <div className="min-h-dvh bg-linear-to-r from-grey-900 to-grey-950 flex justify-center items-center font-sans">
      <main className="max-w-112.5 w-full">
        <h1 className="text-[16px] text-grey-600 mb-4 text-center">
          Password Generator
        </h1>
        <div className="bg-grey-800 flex items-center justify-between px-4 h-16 mb-4">
          <p className="text-grey-700 font-[24px]">P4$5W0rD!</p>
          <button className="cursor-pointer group">
            <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
                className="fill-green-200 h-5 group-hover:fill-white"
              />
            </svg>
            <span className="hidden">Copy</span>
          </button>
        </div>
        <div className="bg-grey-800 p-4">
          <div className="flex justify-between items-center mb-[16px]">
            <p className="text-[16px] text-grey-200">Character Length</p>
            <p className="text-[24px] text-green-200">0</p>
          </div>
          <input
            type="range"
            min="0"
            max="20"
            step="1"
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
          <div className="mb-8">
            <div className="text-[16px] text-white mb-4.25">
              <input type="checkbox" className="" id="upper" />
              <label htmlFor="upper" className="cursor-pointer">
                Include Uppercase Letters
              </label>
            </div>
            <div className="text-[16px] text-white mb-4.25">
              <input type="checkbox" className="" id="lower" />
              <label htmlFor="lower" className="cursor-pointer">
                Include Lowercase Letters
              </label>
            </div>
            <div className="text-[16px] text-white mb-4.25">
              <input type="checkbox" className="" id="nums" />
              <label htmlFor="nums" className="cursor-pointer">
                Include Numbers
              </label>
            </div>
            <div className="text-[16px] text-white mb-4.25">
              <input type="checkbox" className="" id="symb" />
              <label htmlFor="symb" className="cursor-pointer">
                Include Symbols
              </label>
            </div>
          </div>
          <div className="bg-grey-850 py-3.5 px-4 flex justify-between items-center h-14 mb-4">
            <p className="uppercase text-[16px] text-grey-600">Strength</p>
            <div className="flex gap-2 h-full">
              <div className="h-full w-2.5 border-white border-2"></div>
              <div className="h-full w-2.5 border-white border-2"></div>
              <div className="h-full w-2.5 border-white border-2"></div>
              <div className="h-full w-2.5 border-white border-2"></div>
            </div>
          </div>
          <button className="bg-green-200 text-grey-800 uppercase w-full h-14 cursor-pointer flex justify-center items-center gap-4 border-0">
            <span>Generate</span>
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                className="fill-grey-800"
                d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
