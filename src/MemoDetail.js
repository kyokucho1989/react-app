export default function MemoDetail({
  isEditable,
  setIsEditable,
  editId,
  items,
  setItems,
}) {
  function saveItems(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    let memoContent = Object.fromEntries(formData.entries()).postContent;
    console.log(memoContent);
    console.log(editId);
    const newItems = items.map((item, i) => {
      if (i === Number(editId)) {
        return memoContent;
      } else {
        return item;
      }
    });
    setItems(newItems);
    setIsEditable(false);
  }
  function deleteItems(e) {
    e.preventDefault();
    const newItems = items.filter((item, i) => i !== Number(editId));
    setItems(newItems);
    setIsEditable(false);
  }
  return (
    <>
      {!isEditable ? (
        <></>
      ) : (
        <div>
          <h1>詳細</h1>
          <form method="post" onSubmit={saveItems}>
            <textarea name="postContent" defaultValue={items[editId]} />
            <button type="submit">編集</button>
            <button type="delete" onClick={deleteItems}>
              削除
            </button>
          </form>
        </div>
      )}
    </>
  );
}
