const dummyData = "an example of a data from the server";

export default function Clipboard() {
  return (
    <div>
      <div className="flexflex-col items-center justify-center h-[100vh] bg-slate-300">
        <h3>{dummyData}</h3>
        <button
          onClick={() => {
            navigator.clipboard.writeText(dummyData);
          }}
          className="text-[12px] pl-2"
        >
          Tap to copy
        </button>

        <p>Try Pasting it down here</p>
        <input
          type="text"
          placeholder="paste the dummy data here"
          className="w-full outline-none focus:outline-none"
        />
      </div>
    </div>
  );
}
