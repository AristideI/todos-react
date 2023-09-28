import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  let [todos, setTodos] = useState(["Todo 1", "Todo 2"]);
  let [todo, setTodo] = useState("");
  let mapped = todos.map((elt) => <Card key={elt} text={elt} />);
  console.log(todo);
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  function handleChange(e) {
    setTodo(e.target.value);
  }

  return (
    <article className="text-white w-full flex flex-col justify-start items-center">
      <p className="text-center font-bold font-serif text-5xl my-12">ToDos</p>
      <form
        className="w-full flex justify-center items-center gap-4"
        onSubmit={handleSubmit}
      >
        <input
          className="w-2/5 py-2 px-2 text-black font-semibold border-2 border-slate-900 rounded-xl bg-slate-500"
          type="text"
          name="todo"
          placeholder="Write a todo"
          value={todo}
          onChange={handleChange}
        />
        <button className="bg-green-600 py-2 px-8 rounded-2xl hover:bg-green-800 transition-all duration-300 font-bold text-xl">
          Add
        </button>
      </form>

      <section className="flex flex-col w-2/5 mt-12 gap-4">{mapped}</section>
    </article>
  );
}

export default App;
