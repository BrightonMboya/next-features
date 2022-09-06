export default function Clipboard() {
  return (
    <div>
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
