import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "./AuthContext.js";

export default function MemoList({
  setIsEditable,
  setEditId,
  items,
  setItems,
}) {
  const { isLogin } = useContext(AuthContext);
  const listItems = items.map((item, index) => (
    <li key={index} id={index} onClick={editItem}>
      {item.split("\n")[0]}
    </li>
  ));

  function editItem(e) {
    setIsEditable(true);
    setEditId(e.target.id);
  }

  function addItem() {
    setIsEditable(true);
    setItems([...items, "新規メモ"]);
    setEditId(items.length.toString());
  }

  return (
    <>
      <div className="content_box">
        <ul>{listItems}</ul>
        {isLogin ? <button onClick={addItem}>+</button> : <></>}
      </div>
    </>
  );
}

MemoList.propTypes = {
  isEditable: PropTypes.bool,
  setIsEditable: PropTypes.func,
  setEditId: PropTypes.func,
  items: PropTypes.array,
  setItems: PropTypes.func,
};
