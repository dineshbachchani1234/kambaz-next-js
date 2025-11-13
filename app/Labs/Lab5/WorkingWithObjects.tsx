"use client";
import React, { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "M101",
    name: "Introduction to Node.js",
    description: "Learn the basics of Node.js and Express",
    course: "CS5610",
  });

  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      
      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary me-2" id="wd-retrieve-assignments" href={ASSIGNMENT_API_URL}>
        Get Assignment
      </a>
      <a className="btn btn-primary" id="wd-retrieve-modules" href={MODULE_API_URL}>
        Get Module
      </a>
      <hr />
      
      <h4>Retrieving Properties</h4>
      <a className="btn btn-primary me-2" id="wd-retrieve-assignment-title" href={`${ASSIGNMENT_API_URL}/title`}>
        Get Title
      </a>
      <a className="btn btn-primary" id="wd-retrieve-module-name" href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>
      <hr />
      
      <h4>Modifying Properties</h4>
      <div className="mb-3">
        <input
          className="form-control mb-2"
          id="wd-assignment-title"
          defaultValue={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
        <a className="btn btn-primary" id="wd-update-assignment-title" href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
          Update Assignment Title
        </a>
      </div>
      
      <div className="mb-3">
        <input
          type="number"
          className="form-control mb-2"
          id="wd-assignment-score"
          defaultValue={assignment.score}
          onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
        />
        <a className="btn btn-primary" id="wd-update-assignment-score" href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
          Update Assignment Score
        </a>
      </div>
      
      <div className="mb-3">
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="wd-assignment-completed"
            checked={assignment.completed}
            onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
          />
          <label className="form-check-label" htmlFor="wd-assignment-completed">
            Completed
          </label>
        </div>
        <a className="btn btn-primary" id="wd-update-assignment-completed" href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
          Update Assignment Completed
        </a>
      </div>
      
      <div className="mb-3">
        <input
          className="form-control mb-2"
          id="wd-module-name"
          defaultValue={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
        />
        <a className="btn btn-primary" id="wd-update-module-name" href={`${MODULE_API_URL}/name/${module.name}`}>
          Update Module Name
        </a>
      </div>
      
      <div className="mb-3">
        <input
          className="form-control mb-2"
          id="wd-module-description"
          defaultValue={module.description}
          onChange={(e) => setModule({ ...module, description: e.target.value })}
        />
        <a className="btn btn-primary" id="wd-update-module-description" href={`${MODULE_API_URL}/description/${module.description}`}>
          Update Module Description
        </a>
      </div>
      <hr />
    </div>
  );
}