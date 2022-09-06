const dummyData = "an example of a data from the server";

export default function Clipboard() {
  return (
    <div>
      <div className="flex flex-col gap-3 items-center justify-center h-[100vh] bg-slate-300">
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
          className="outline-none focus:outline-none w-[400px] h-[100px] mt-5 rounded-md bg-transparent border-[1px] border-black"
        />
      </div>
    </div>
  );
}
