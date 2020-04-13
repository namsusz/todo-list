import React from "react";
import "./TodoListTemplate.css";

function TodoListTemplate({ form, palette, children }) {
  return (
    <main className="todo__list__template">
      <div className="title">오늘의 할 일 (๑و•̀Δ•́)و</div>
      <section className="palette__wrapper">{palette}</section>
      <section className="form__wrapper">{form}</section>
      <section className="todo__wrapper">{children}</section>
    </main>
  );
}

export default TodoListTemplate;
