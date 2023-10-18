import { useState } from "react";
import { edittodo, deletetodo } from "./action";
import { useDispatch } from "react-redux";

const Todo = (props) => {
  const { id, title } = props;
  const [edit, setEdit] = useState(false);
  const [newTitle, setnewTitle] = useState(title);
  // const[idn,setIdn]=useState(1)
  let dispatch = useDispatch();

  const handleSave = () => {
    if (newTitle.trim()) {
      dispatch(edittodo({ id: id, title: newTitle }));
      setEdit(false);
    }
  };

  const handleDelete = () => {
    dispatch(deletetodo(id));
  };

  return (
    <>
      {edit ? (
        <div className="form-group d-flex justify-content-between mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setnewTitle(e.target.value)}
          />
          <button className="btn btn-secondary" onClick={() => handleSave()}>
            Save
          </button>
        </div>
      ) : (
        <li className="list-group-item d-flex justify-content-between mt-3">
          <p>{title}</p>
          <div className="actions">
            <button className="btn btn-warning" onClick={() => setEdit(true)}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              delete
            </button>
          </div>
        </li>
      )}
    </>
  );
};
export default Todo;
