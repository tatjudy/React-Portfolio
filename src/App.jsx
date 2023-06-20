import { useState } from "react";
import "./style.css";

export default function App() {
  const [newItem, setNewItem] = useState("");

  setNewItem("dsds");

  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item" />
          <button className="btn">Add</button>
        </div>
      </form>
      <h1 classname="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}