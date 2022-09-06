export default function Clipboard() {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText();
      }}
      className="text-[12px] pl-2"
    >
      Tap to copy
    </button>
  );
}
