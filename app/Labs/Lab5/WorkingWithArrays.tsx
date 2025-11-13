"use client";
import React, { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

export default function WorkingWithArrays() {
  const API = `${HTTP_SERVER}/lab5/todos`;
  
  // Separate state for each section
  const [retrieveId, setRetrieveId] = useState("1");
  const [removeId, setRemoveId] = useState("1");
  const [updateTodo, setUpdateTodo] = useState({ id: "1", title: "NodeJS Assignment" });
  const [completedTodo, setCompletedTodo] = useState({ id: "1", completed: false });
  const [descriptionTodo, setDescriptionTodo] = useState({
    id: "1",
    description: "Create a NodeJS server with ExpressJS",
  });
  
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary mb-3" href={API}>
        Get Todos
      </a>
      <hr />
      
      <h4>Retrieving an Item from an Array by ID</h4>
      <div className="mb-3">
        <input
          id="wd-todo-id"
          className="form-control mb-2"
          value={retrieveId}
          onChange={(e) => setRetrieveId(e.target.value)}
        />
        <a id="wd-retrieve-todo-by-id" className="btn btn-primary" href={`${API}/${retrieveId}`}>
          Get Todo by ID
        </a>
      </div>
      <hr />
      
      <h4>Filtering Array Items</h4>
      <a id="wd-retrieve-completed-todos" className="btn btn-primary mb-3" href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <hr />
      
      <h4>Creating new Items in an Array</h4>
      <a id="wd-create-todo" className="btn btn-primary mb-3" href={`${API}/create`}>
        Create Todo
      </a>
      <hr />
      
      <h4>Removing from an Array</h4>
      <div className="mb-3">
        <input
          id="wd-remove-todo-id"
          className="form-control mb-2"
          value={removeId}
          onChange={(e) => setRemoveId(e.target.value)}
        />
        <a id="wd-remove-todo" className="btn btn-primary" href={`${API}/${removeId}/delete`}>
          Remove Todo with ID = {removeId}
        </a>
      </div>
      <hr />
      
      <h4>Updating an Item in an Array</h4>
      <div className="mb-3 d-flex gap-2">
        <input
          className="form-control"
          style={{ width: "100px" }}
          value={updateTodo.id}
          onChange={(e) => setUpdateTodo({ ...updateTodo, id: e.target.value })}
        />
        <input
          className="form-control flex-grow-1"
          value={updateTodo.title}
          onChange={(e) => setUpdateTodo({ ...updateTodo, title: e.target.value })}
        />
        <a id="wd-update-todo" className="btn btn-primary" href={`${API}/${updateTodo.id}/title/${updateTodo.title}`}>
          Update Todo
        </a>
      </div>
      <hr />
      
      <h4>Updating Completed Property</h4>
      <div className="mb-3">
        <input
          className="form-control mb-2"
          value={completedTodo.id}
          onChange={(e) => setCompletedTodo({ ...completedTodo, id: e.target.value })}
        />
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="wd-todo-completed"
            checked={completedTodo.completed}
            onChange={(e) => setCompletedTodo({ ...completedTodo, completed: e.target.checked })}
          />
          <label className="form-check-label" htmlFor="wd-todo-completed">
            Completed
          </label>
        </div>
        <a id="wd-update-todo-completed" className="btn btn-primary" href={`${API}/${completedTodo.id}/completed/${completedTodo.completed}`}>
          Update Completed
        </a>
      </div>
      <hr />
      
      <h4>Updating Description Property</h4>
      <div className="mb-3">
        <input
          className="form-control mb-2"
          value={descriptionTodo.id}
          onChange={(e) => setDescriptionTodo({ ...descriptionTodo, id: e.target.value })}
        />
        <input
          className="form-control mb-2"
          value={descriptionTodo.description}
          onChange={(e) => setDescriptionTodo({ ...descriptionTodo, description: e.target.value })}
        />
        <a id="wd-update-todo-description" className="btn btn-primary" href={`${API}/${descriptionTodo.id}/description/${descriptionTodo.description}`}>
          Update Description
        </a>
      </div>
      <hr />
    </div>
  );
}