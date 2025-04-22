function HoverCounter({count, increment}) {
  return (
    <div>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onMouseEnter={increment}
      >
        You hovered over me {count} times
      </button>
    </div>
  );
}

export default HoverCounter;