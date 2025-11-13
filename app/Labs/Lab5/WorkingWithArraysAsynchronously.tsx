/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FaTrash, FaPlusCircle, FaTimes, FaPencilAlt, FaPlusSquare } from "react-icons/fa";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [editTodo, setEditTodo] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };
  
  const removeTodo = async (todo: any) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };
  
  const deleteTodo = async (todo: any) => {
    try {
      await client.deleteTodo(todo);
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };
  
  const createNewTodo = async () => {
    const todos = await client.createNewTodo();
    setTodos(todos);
  };
  
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({ title: "New Posted Todo", completed: false });
    setTodos([...todos, newTodo]);
  };
  
  const updateTodo = async (todo: any) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setEditTodo(null);
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };
  
  useEffect(() => {
    fetchTodos();
  }, []);
  
  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
      <h4>
        Todos{" "}
        <FaPlusCircle
          onClick={createNewTodo}
          className="text-success float-end fs-3 me-2"
          id="wd-create-todo"
          style={{ cursor: "pointer" }}
        />
        <FaPlusSquare
          onClick={postNewTodo}
          className="text-primary float-end fs-3 me-3"
          id="wd-post-todo"
          style={{ cursor: "pointer" }}
        />
      </h4>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={todo.completed}
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />
            {editTodo && editTodo.id === todo.id ? (
              <input
                className="form-control w-50 float-start me-2"
                value={editTodo.title}
                onChange={(e) =>
                  setEditTodo({ ...editTodo, title: e.target.value })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo(editTodo);
                  }
                }}
              />
            ) : (
              <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.title}
              </span>
            )}
            <FaTrash
              onClick={() => removeTodo(todo)}
              className="text-danger float-end mt-1"
              id="wd-remove-todo"
              style={{ cursor: "pointer" }}
            />
            <FaTimes
              onClick={() => deleteTodo(todo)}
              className="text-danger float-end mt-1 me-2 fs-3"
              id="wd-delete-todo"
              style={{ cursor: "pointer" }}
            />
            <FaPencilAlt
              onClick={() => setEditTodo(todo)}
              className="text-primary float-end mt-1 me-2"
              id="wd-edit-todo"
              style={{ cursor: "pointer" }}
            />
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}