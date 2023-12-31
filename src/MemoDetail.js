import PropTypes from "prop-types";

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
        <div className="content_box">
          <div className="content">
            <form method="post" onSubmit={saveItems}>
              <textarea name="postContent" defaultValue={items[editId]} />
              <button type="submit">保存</button>
              <button type="delete" onClick={deleteItems}>
                削除
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

MemoDetail.propTypes = {
  isEditable: PropTypes.bool,
  setIsEditable: PropTypes.func,
  editId: PropTypes.string,
  items: PropTypes.array,
  setItems: PropTypes.func,
};
