import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import '../App'
import { useEffect, useState } from "react";
import TodoNav from "./TodoNav";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [selectedOption, setSelectedOption] = useState({ value: "All", label: "All" });

    useEffect(() => {
        selectHandler(selectedOption.value);
    }, [todos, selectedOption])

    const statusHandler = (e) => {
      setSelectedOption(e);
      selectHandler(e.value);
    };

    const addHandler = (value)=>{
        const newTodo = {id: Math.floor(Math.random() * 1000), text: value, iscompleted: false};
        setTodos([...todos, newTodo]);
    }

    const completedHandler = (id) =>{
        const index = todos.findIndex(todo => todo.id === id);
        const selectedTodo = {...todos[index]};
        selectedTodo.iscompleted = !selectedTodo.iscompleted;
        console.log(selectedTodo);
        const updatedTodo = [...todos];
        updatedTodo[index] = selectedTodo;
        setTodos(updatedTodo);
    }

    const removeHandler = (id) => {
        const filterdTodo = todos.filter(todo => todo.id !== id); 
        setTodos(filterdTodo);
    }

    const editHandler = (id, newTodo) => {
        const index = todos.findIndex(todo => todo.id === id);
        const selectedTodo = {...todos[index]};
        selectedTodo.text = newTodo;
        console.log(selectedTodo);
        const updatedTodo = [...todos];
        updatedTodo[index] = selectedTodo;
        setTodos(updatedTodo);
    }

    const selectHandler = (value) => {
        console.log(value);
      if (value === "All") {
        setFilteredTodos(todos);
       
      } else if (value === "Completed") {
        const completed = todos.filter((t) => t.iscompleted);
        setFilteredTodos(completed);
       
      } else if (value === "UnCompleted") {
        const unCompleted = todos.filter((t) => !t.iscompleted);
        setFilteredTodos(unCompleted);
        
      }
    };

    return <div className="Container">
        <h1>Todo App</h1>
        <TodoNav todos={todos} onChange ={statusHandler} selectedOption = {selectedOption}/>
        <TodoForm submitTodo={addHandler}/>
        <TodoList todos={filteredTodos} onCompleted={completedHandler} onDelete={removeHandler} onUpdate={editHandler}/>
    </div>;
}
 
export default TodoApp;