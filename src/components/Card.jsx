export default function Card(props) {
  function bin(e) {
    console.log(e.target);
  }
  return (
    <section className="flex justify-between items-center w-full border-2 border-green-600 px-4 py-2 rounded-xl">
      <div className="flex items-center gap-4">
        <input type="checkbox" />
        <p>{props.text}</p>
      </div>
      <button
        onClick={bin}
        className="border-2 border-teal-700 w-12 h-12 rounded-full grid place-content-center"
      >
        <img className="w-6" src="/trash-bin.png" alt="delete icon" />
      </button>
    </section>
  );
}
