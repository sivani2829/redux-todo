import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  let data = useSelector((state) => state.todos);
  console.log(data);
  return (
    <>
      <ul className="list-group mt-4">
        {data.map((e) => (
          <Todo key={e.id} id={e.id} title={e.title} />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
