import "./App.css";
import MemoList from "./MemoList.js";
import MemoDetail from "./MemoDetail.js";
import { useState } from "react";

function App() {
  const itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(itemsFromStorage || []);
  const [isEditable, setIsEditable] = useState(false);
  const [editId, setEditId] = useState("-1");
  localStorage.setItem("items", JSON.stringify(items));

  return (
    <>
      <div className="Memo_container">
        <h1>{isEditable ? "編集" : "一覧"}</h1>
        <MemoList
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          setEditId={setEditId}
          items={items}
          setItems={setItems}
        />
        <MemoDetail
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          editId={editId}
          items={items}
          setItems={setItems}
        />
      </div>
    </>
  );
}

export default App;
