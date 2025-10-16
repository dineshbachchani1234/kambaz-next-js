/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { BsGripVertical } from "react-icons/bs";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules.filter((module: any) => module.course === cid);
  
  return (
    <div>
      <ModulesControls />
      <br /><br /><br /><br />
      
      <ListGroup id="wd-modules">
        {modules.map((module: any) => (
          <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
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