const dummyData = "an example of a data from the server";

export default function Clipboard() {
  return (
    <div className="flex items-center justify-center h-[100vh] bg-slate-300">
      <h3>{dummyData}</h3>
      <button
        onClick={() => {
          navigator.clipboard.writeText(dummyData);
        }}
        className="text-[12px] pl-2"
      >
        Tap to copy
      </button>
    </div>
  );
}
