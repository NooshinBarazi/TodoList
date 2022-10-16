import React, { useEffect, useRef, useState } from "react";
import styles from "./todoform.module.css";

const TodoForm = (props) => {
  const [value, setValue] = useState(props.edit ? props.edit.text : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!value) {
      alert("please enter a task!");
      return;
    }
    props.submitTodo(value);
    setValue("");
  };
  return (
    <div className={styles.todoform}>
      <form className={styles.taskBar} onSubmit={submitHandler}>
        <input
          type="text"
          placeholder={props.edit ? "update value" : "add new Todo"}
          className={styles.taskInput}
          onChange={changeHandler}
          value={value}
          ref={inputRef}
        />
        <button type="submit" className={styles.addBtn}>
          {props.edit ? "update" : "add"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
