import "./todolist.css";
import { BiCircle } from "react-icons/bi";
import { FcCheckmark } from "react-icons/fc";

const Todo = ({ todo, onCompleted, onDelete, onEdit }) => {
  return (
    <div className="todolist">
      <div className="taskCheck">
        <span onClick={onCompleted}>
          {todo.iscompleted ? <FcCheckmark /> : <BiCircle />}
        </span>
        <p className={`${"taskTitle"} ${todo.iscompleted ? "completed" : ""}`}>
          {todo.text}
        </p>
      </div>
      <div className="btnList">
        <button className="editBtn" onClick={onEdit}>Edit</button>
        <button className="deleteBtn" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
