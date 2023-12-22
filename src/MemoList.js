export default function MemoList({
  isEditable,
  setIsEditable,
  setEditId,
  items,
  setItems,
}) {
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
    setEditId(items.length);
  }

  return (
    <>
      <div class="content_box">
        <ul>{listItems}</ul>
        <button onClick={addItem}>+</button>
      </div>
    </>
  );
}
