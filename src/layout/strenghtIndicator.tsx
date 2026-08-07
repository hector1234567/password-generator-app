export default function StrengthIndicator() {
  return (
    <div className="bg-grey-850 py-3.5 px-4 flex justify-between items-center h-14 mb-4">
      <p className="uppercase text-[16px] text-grey-600">Strength</p>
      <div className="flex gap-2 h-full">
        <div className="h-full w-2.5 border-white border-2"></div>
        <div className="h-full w-2.5 border-white border-2"></div>
        <div className="h-full w-2.5 border-white border-2"></div>
        <div className="h-full w-2.5 border-white border-2"></div>
      </div>
    </div>
  );
}
