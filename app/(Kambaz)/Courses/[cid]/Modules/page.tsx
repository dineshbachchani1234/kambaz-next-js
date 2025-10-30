/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { BsGripVertical } from "react-icons/bs";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import { useSelector, useDispatch } from "react-redux";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";

export default function Modules() {
  const { cid } = useParams();
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const [moduleName, setModuleName] = useState("");
  
  const isFaculty = currentUser?.role === "FACULTY";
  
  return (
    <div>
      {isFaculty && (
        <ModulesControls 
          setModuleName={setModuleName} 
          moduleName={moduleName} 
          addModule={() => {
            dispatch(addModule({ name: moduleName, course: cid }));
            setModuleName("");
          }} 
        />
      )}
      <br /><br /><br /><br />
      
      <ListGroup id="wd-modules">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && isFaculty && (
                  <FormControl
                    className="w-50 d-inline-block"
                    onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                {isFaculty && (
                  <ModuleControlButtons 
                    moduleId={module._id}
                    deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                  />
                )}
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                      <span className="wd-title">
                        <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                      </span>
                      <div style={{ paddingLeft: "20px" }} className="mt-2">
                        <div className="d-flex justify-content-between align-items-center py-2">
                          <span>
                            <BsGripVertical className="me-2" /> {lesson.description}
                          </span>
                          <span>
                            <FaCheckCircle className="text-success me-2" />
                            <IoEllipsisVertical />
                          </span>
                        </div>
                      </div>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}