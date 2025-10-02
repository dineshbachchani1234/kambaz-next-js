import { BsGripVertical } from "react-icons/bs";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br /><br /><br /><br />
      
      <ListGroup id="wd-modules">
        {/* Week 1 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title">
                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
              </span>
              <div style={{ paddingLeft: "20px" }} className="mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Introduction to the course
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Learn what is Web Development
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Set up development environment and tools
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title">
                <BsGripVertical className="me-2 fs-3" /> Reading <LessonControlButtons />
              </span>
              <div style={{ paddingLeft: "20px" }} className="mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Full Stack Developer - Chapter 1
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Full Stack Developer - Chapter 2
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Full Stack Developer - Chapter 3
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title">
                <BsGripVertical className="me-2 fs-3" /> Slides <LessonControlButtons />
              </span>
              <div style={{ paddingLeft: "20px" }} className="mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Full Stack Developer - Chapter 1
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Full Stack Developer - Chapter 2
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Full Stack Developer - Chapter 3
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
        
        {/* Week 2 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title">
                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
              </span>
              <div style={{ paddingLeft: "20px" }} className="mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Learn CSS fundamentals (selectors, properties, colors, fonts)
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Apply layouts with Flexbox and Grid
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Practice styling HTML pages with responsive design principles
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title">
                <BsGripVertical className="me-2 fs-3" /> Reading <LessonControlButtons />
              </span>
              <div style={{ paddingLeft: "20px" }} className="mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Full Stack Developer - Chapter 4
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Full Stack Developer - Chapter 5
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Full Stack Developer - Chapter 6
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title">
                <BsGripVertical className="me-2 fs-3" /> Slides <LessonControlButtons />
              </span>
              <div style={{ paddingLeft: "20px" }} className="mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Full Stack Developer - Chapter 4
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Full Stack Developer - Chapter 5
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Full Stack Developer - Chapter 6
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
        
        {/* Week 3 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 3 <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title">
                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
              </span>
              <div style={{ paddingLeft: "20px" }} className="mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Dive into JavaScript basics (variables, types, operators, functions)
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Work with DOM manipulation and event handling
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Build simple interactive web pages combining HTML, CSS, and JS
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title">
                <BsGripVertical className="me-2 fs-3" /> Reading <LessonControlButtons />
              </span>
              <div style={{ paddingLeft: "20px" }} className="mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Full Stack Developer - Chapter 7
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Full Stack Developer - Chapter 8
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Full Stack Developer - Chapter 9
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title">
                <BsGripVertical className="me-2 fs-3" /> Slides <LessonControlButtons />
              </span>
              <div style={{ paddingLeft: "20px" }} className="mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Full Stack Developer - Chapter 7
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Full Stack Developer - Chapter 8
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>
                    <BsGripVertical className="me-2" /> Full Stack Developer - Chapter 9
                  </span>
                  <span>
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </span>
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}