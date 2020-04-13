import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;
    return (
      <div className="todo__item" onClick={() => onToggle(id)}>
        <div
          className="remove"
          onClick={e => {
            e.stopPropagation(); // onToggle 이 실행되지 않도록 함
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`todo__text ${checked && "checked"}`}>
          <div>{text}</div>
        </div>
        {checked && <div className="check__mark">✓</div>}
      </div>
    );
  }
}

export default TodoItem;
