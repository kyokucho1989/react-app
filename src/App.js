import "./App.css";
import MemoList from "./MemoList.js";
import MemoDetail from "./MemoDetail.js";
import { useState } from "react";

function App() {
  const itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(itemsFromStorage || []);
  const [isEditable, setIsEditable] = useState(false);
  const [editId, setEditId] = useState("-1");

  function setItemToLocalStorage(newItems) {
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(items));
  }
  return (
    <>
      <div className="Memo_container">
        <h1>{isEditable ? "編集" : "一覧"}</h1>
        <MemoList
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          setEditId={setEditId}
          items={items}
          setItems={setItemToLocalStorage}
        />
        <MemoDetail
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          editId={editId}
          items={items}
          setItems={setItemToLocalStorage}
        />
      </div>
    </>
  );
}

export default App;
