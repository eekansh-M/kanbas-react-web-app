import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem({ todo}: {
    todo: { id: string; title: string };
  }) {
    const dispatch = useDispatch();
    return (
      <li key={todo.id} className="list-group-item">
        {todo.title} 
        <span className="me-2"></span>
        <button className="btn btn-primary me-2" onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click">
              Edit </button> 
              <button className="btn btn-danger text-white me-2" onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click">
              Delete </button>
   </li>);}