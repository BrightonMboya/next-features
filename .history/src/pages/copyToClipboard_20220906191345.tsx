export default function Clipboard() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <button
        onClick={() => {
          navigator.clipboard.writeText();
        }}
        className="text-[12px] pl-2"
      >
        Tap to copy
      </button>
    </div>
  );
}
