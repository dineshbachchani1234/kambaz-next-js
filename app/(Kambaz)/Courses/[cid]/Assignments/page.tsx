/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button, ListGroup, ListGroupItem, InputGroup, FormControl } from "react-bootstrap";
import InputGroupText from "react-bootstrap/InputGroupText";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const filteredAssignments = assignments.filter((assignment: any) => assignment.course === cid);
  
  const isFaculty = currentUser?.role === "FACULTY";
  
  const handleDelete = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to remove this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };
  
  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <InputGroup style={{ width: "300px" }}>
          <InputGroupText className="bg-white">
            <FaSearch />
          </InputGroupText>
          <FormControl
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="border-start-0"
          />
        </InputGroup>
        <div>
          {isFaculty && (
            <>
              <Button variant="secondary" className="me-2" id="wd-add-assignment-group">
                <FaPlus className="me-1" /> Group
              </Button>
              <Button 
                variant="danger" 
                id="wd-add-assignment"
                onClick={() => router.push(`/Courses/${cid}/Assignments/new`)}
              >
                <FaPlus className="me-1" /> Assignment
              </Button>
            </>
          )}
        </div>
      </div>

      <ListGroup>
        <ListGroupItem className="p-0 mb-3 border-0">
          <div className="wd-title p-2 ps-1 bg-light d-flex justify-content-between align-items-center">
            <span>
              <BsGripVertical className="me-2" />
              ASSIGNMENTS
            </span>
            <div>
              <span className="badge bg-transparent text-dark border me-2">40% of Total</span>
              {isFaculty && <FaPlus />}
              <IoEllipsisVertical className="ms-2" />
            </div>
          </div>
          
          <ListGroup className="list-group-flush">
            {filteredAssignments.map((assignment: any) => (
              <ListGroupItem key={assignment._id} className="ps-3" style={{ borderLeft: "3px solid #28a745" }}>
                <div className="d-flex justify-content-between align-items-start">
                  <div className="d-flex align-items-start">
                    <BsGripVertical className="me-2 mt-1" />
                    <BiTask className="me-3 mt-1 text-success" />
                    <div>
                      <Link href={`/Courses/${cid}/Assignments/${assignment._id}`} className="text-decoration-none text-dark fw-bold">
                        {assignment.title}
                      </Link>
                      <div className="small text-muted">
                        <span className="text-danger">Multiple Modules</span> | 
                        <strong> Not available until</strong> {assignment.availableFrom ? new Date(assignment.availableFrom).toLocaleDateString() : 'May 6'} at 12:00am |
                      </div>
                      <div className="small text-muted">
                        <strong>Due</strong> {assignment.dueDate ? new Date(assignment.dueDate).toLocaleString() : 'May 13 at 11:59pm'} | 
                        {assignment.points || 100} pts
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    {isFaculty && (
                      <FaTrash 
                        className="text-danger me-2" 
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDelete(assignment._id)}
                      />
                    )}
                    <FaCheckCircle className="text-success me-2" />
                    <IoEllipsisVertical />
                  </div>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>

        {/* EXAMS Section */}
        <ListGroupItem className="p-0 mb-3 border-0">
          <div className="wd-title p-2 ps-1 bg-light d-flex justify-content-between align-items-center">
            <span>
              <BsGripVertical className="me-2" />
              EXAMS
            </span>
            <div>
              <span className="badge bg-transparent text-dark border me-2">20% of Total</span>
              {isFaculty && <FaPlus />}
              <IoEllipsisVertical className="ms-2" />
            </div>
          </div>
        </ListGroupItem>

        {/* PROJECT Section */}
        <ListGroupItem className="p-0 mb-3 border-0">
          <div className="wd-title p-2 ps-1 bg-light d-flex justify-content-between align-items-center">
            <span>
              <BsGripVertical className="me-2" />
              PROJECT
            </span>
            <div>
              <span className="badge bg-transparent text-dark border me-2">30% of Total</span>
              {isFaculty && <FaPlus />}
              <IoEllipsisVertical className="ms-2" />
            </div>
          </div>
        </ListGroupItem>

        {/* QUIZZES Section */}
        <ListGroupItem className="p-0 mb-3 border-0">
          <div className="wd-title p-2 ps-1 bg-light d-flex justify-content-between align-items-center">
            <span>
              <BsGripVertical className="me-2" />
              QUIZZES
            </span>
            <div>
              <span className="badge bg-transparent text-dark border me-2">10% of Total</span>
              {isFaculty && <FaPlus />}
              <IoEllipsisVertical className="ms-2" />
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}