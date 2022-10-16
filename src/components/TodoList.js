import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import state from "../images/empty.webp"



const TodoList = ({ todos, onCompleted, onDelete, onUpdate}) => {
  
  const [editTodo, setEditTodo] = useState({id: null, text: '', iscompleted: false});

  const editHandler = (newTodo) =>{
    onUpdate(editTodo.id, newTodo);
    setEditTodo({id: null, text: ''})
  }

  const renderTodo = () => {
    if (todos.length === 0) return <img src={state} width="200px" alt="empty-state"/>
        
    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onCompleted={() => onCompleted(todo.id)}
          onDelete = {() => onDelete(todo.id)}
          onEdit = {() => setEditTodo(todo)}
        />
      ) 
      
    });
  };

  return <div>{editTodo.id? <TodoForm  submitTodo = {editHandler} edit={editTodo}/> : renderTodo()}</div>;
};

export default TodoList;
