import { useState } from "react";

export default function Card(props) {
  let [checkbox, setCheckbox] = useState(false);

  function bin(e) {
    console.log(e.target);
  }

  function checker() {
    setCheckbox(!checkbox);
  }
  let styles = {
    textDecoration: "line-through",
    color: "red",
  };
  return (
    <section className="flex justify-between items-center w-full border-2 border-green-600 px-4 py-2 rounded-xl">
      <div className="flex items-center gap-4">
        <input
          className="w-6 h-6 border border-teal-500 bg-slate-800"
          type="checkbox"
          onChange={checker}
        />
        <p
          style={checkbox ? styles : {}}
          className="font-medium text-xl font-serif"
        >
          {props.text}
        </p>
      </div>

      <img
        onClick={props.delete}
        className="w-12 border-2 border-teal-500 rounded-full p-2"
        src="/trash-bin.png"
        alt="delete icon"
        name={props.id}
      />
    </section>
  );
}
