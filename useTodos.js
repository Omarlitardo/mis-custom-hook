import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-UseReducer/todoReducer,js";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  // console.log({todo})
  useEffect(() => {
    // console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO ] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    // console.log({id});
    dispatch({
      type: "[TODO ] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    // console.log({ id });
    dispatch({
      type: "[TODO] Toggle todo",
      payload: id,
    });
  };

  const todosCount = (id) => {
    console.log({ id });
    dispatch({
      type: "[TODO] Toggle todo",
      payload: id,
    });
  };

  const pendingTodosCount = (id) => {
    console.log({ id });
  };
  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
  };
};
