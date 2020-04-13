import React from "react";
import Form from "./Form";
import TodoListTemplate from "./TodoListTemplate";
import TodoItemList from "./TodoItemList";
import Palette from "./Palette";

const colors = ["#343a40", "#f03e3e", "#12b886", "#228ae6"];

class App extends React.Component {
  id = 2;
  state = {
    input: "",
    todos: [
      { id: 0, text: "TO DO 리스트 만들기", checked: false },
      { id: 1, text: "새로고침 하면 추가한게 날라가요 ˃̣̣̣̣̣̣︿˂̣̣̣̣̣̣ ", checked: true }
    ],
    color: "#343a40"
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = e => {
    const { input, todos, color } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      }),
      color: color
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = id => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({ todos: nextTodos });
  };

  handleRemove = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  handleColor = color => {
    this.setState({ color });
  };

  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleColor
    } = this;

    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
            color={color}
          />
        }
        palette={
          <Palette colors={colors} selected={color} onSelect={handleColor} />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
          color={color}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
