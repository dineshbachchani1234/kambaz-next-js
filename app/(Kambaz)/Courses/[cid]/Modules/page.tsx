/* eslint-disable @next/next/no-assign-module-variable */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { BsGripVertical } from "react-icons/bs";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import { useSelector, useDispatch } from "react-redux";
import { setModules, updateModule as updateModuleAction } from "./reducer";
import * as client from "../../../Courses/client";

export default function Modules() {
  const { cid } = useParams();
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const [moduleName, setModuleName] = useState("");
  
  const isFaculty = currentUser?.role === "FACULTY";
  
  const fetchModules = async () => {
    try {
      const modules = await client.findModulesForCourse(cid as string);
      dispatch(setModules(modules));
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchModules();
  }, []);
  
  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await client.createModuleForCourse(cid as string, newModule);
    dispatch(setModules([...modules, module]));
    setModuleName("");
  };
  
  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };
  
  const onUpdateModule = async (module: any) => {
    await client.updateModule(module);
    const newModules = modules.map((m: any) => m._id === module._id ? module : m);
    dispatch(setModules(newModules));
  };
  
  return (
    <div>
      {isFaculty && (
        <ModulesControls 
          setModuleName={setModuleName} 
          moduleName={moduleName} 
          addModule={onCreateModuleForCourse}
        />
      )}
      <br /><br /><br /><br />
      
      <ListGroup id="wd-modules">
        {modules.map((module: any) => (
          <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing && module.name}
              {module.editing && isFaculty && (
                <FormControl
                  className="w-50 d-inline-block"
                  onChange={(e) => dispatch(updateModuleAction({ ...module, name: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onUpdateModule({ ...module, editing: false });
                    }
                  }}
                  defaultValue={module.name}
                />
              )}
              {isFaculty && (
                <ModuleControlButtons 
                  moduleId={module._id}
                  deleteModule={() => onRemoveModule(module._id)}
                  editModule={(moduleId) => dispatch(updateModuleAction({ ...module, editing: true }))}
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