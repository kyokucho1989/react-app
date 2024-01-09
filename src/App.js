import "./App.css";
import MemoList from "./MemoList.js";
import MemoDetail from "./MemoDetail.js";
import Header from "./Header.js";
import { useState } from "react";
import { AuthContext } from "./AuthContext.js";

function App() {
  const itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(itemsFromStorage || []);
  const [isEditable, setIsEditable] = useState(false);
  const [editId, setEditId] = useState("-1");
  const [isLogin, setIsLogin] = useState(false);
  function setItemToLocalStorage(newItems) {
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(items));
  }
  return (
    <>
      <div className="Memo_container">
        <AuthContext.Provider value={{ isLogin, setIsLogin }}>
          <Header />
          <h1>{isEditable && isLogin ? "編集" : "一覧"}</h1>
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
        </AuthContext.Provider>
      </div>
    </>
  );
}

export default App;
