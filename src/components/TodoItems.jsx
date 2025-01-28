import "./css/TodoItems.css";
import check from "./assets/check.png";
import close from "./assets/close.png";
import not_tick from "./assets/not_tick.png";

const TodoItems = ({ no, display, text, setTodos }) => {
    
  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  };

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "tick";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  };

  return (
    <div className="todoitems">
      <div
        className={`todoitems-container ${display}`}
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <img src={not_tick} alt="no tick icon" />
        ) : (
          <img src={check} alt="tick icon" />
        )}
        <div className="todoitems-text">{text}</div>
      </div>
      <img
        onClick={() => {
          deleteTodo(no);
        }}
        className="todoitems-crossicon"
        src={close}
        alt="close icon"
      />
    </div>
  );
};

export default TodoItems;
