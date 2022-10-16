import styles from "./todonav.module.css";
import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "UnCompleted", label: "UnCompleted" },
];

const customStyles = {
  control: styles => ({ ...styles,                 
    width: '125px'
  }),
  option: styles => ({ ...styles,                 
    
  }),
  menu: styles => ({ ...styles,                 
   
  })                 

};

const TodoNav = ({ todos, onChange, selectedOption }) => {

  return (
    <div className={styles.header}>
    <div className={styles.status}>
    <span className={styles.quantity}>
        {todos.filter((todo) => !todo.iscompleted).length}
      </span>
      <h4>todos are not complited</h4>
    </div>
      <Select
        value={selectedOption}
        onChange={onChange}
        options={options}
        styles = {customStyles}
      />
    </div>
  );
};

export default TodoNav;
