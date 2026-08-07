export default function GenerateButton() {
  return (
    <button className="bg-green-200 text-grey-800 uppercase w-full h-14 cursor-pointer flex justify-center items-center gap-4 border-0">
      <span>Generate</span>
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <path
          className="fill-grey-800"
          d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
        />
      </svg>
    </button>
  );
}
