/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { use, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setAssignments } from "../reducer";
import * as client from "../../../../Courses/client";

export default function AssignmentEditor({ params }: { params: Promise<{ cid: string; aid: string }> }) {
  const { cid, aid } = use(params);
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  const isFaculty = currentUser?.role === "FACULTY";
  const existingAssignment = assignments.find((a: any) => a._id === aid);
  
  const [assignment, setAssignment] = useState({
    title: existingAssignment?.title || "New Assignment",
    description: existingAssignment?.description || "New Assignment Description",
    points: existingAssignment?.points || 100,
    dueDate: existingAssignment?.dueDate || "2024-05-13T23:59",
    availableFrom: existingAssignment?.availableFrom || "2024-05-06",
    availableUntil: existingAssignment?.availableUntil || "2024-05-20",
    course: cid,
  });

  const handleSave = async () => {
    try {
      if (aid === "new") {
        const newAssignment = await client.createAssignmentForCourse(cid as string, assignment);
        dispatch(setAssignments([...assignments, newAssignment]));
      } else {
        await client.updateAssignment({ ...assignment, _id: aid });
        dispatch(setAssignments(assignments.map((a: any) => 
          a._id === aid ? { ...assignment, _id: aid } : a
        )));
      }
      router.push(`/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <Container className="mt-4">
      <Form>
        <div className="mb-4">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control 
            id="wd-name" 
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
            disabled={!isFaculty}
            size="lg"
          />
        </div>
        
        <div className="mb-4">
          <Form.Control 
            as="textarea" 
            id="wd-description"
            rows={10}
            style={{ lineHeight: '1.8' }}
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
            disabled={!isFaculty}
          />
        </div>

        <Row className="mb-3">
          <Col xs={3} className="text-end">
            <Form.Label htmlFor="wd-points">Points</Form.Label>
          </Col>
          <Col xs={9}>
            <Form.Control 
              id="wd-points" 
              value={assignment.points}
              onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
              disabled={!isFaculty}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={3} className="text-end">
            <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
          </Col>
          <Col xs={9}>
            <Form.Select id="wd-group" defaultValue="ASSIGNMENTS" disabled={!isFaculty}>
              <option>ASSIGNMENTS</option>
              <option>Labs</option>
              <option>Quizzes</option>
              <option>Exams</option>
              <option>Projects</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={3} className="text-end">
            <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
          </Col>
          <Col xs={9}>
            <Form.Select id="wd-display-grade-as" defaultValue="Percentage" disabled={!isFaculty}>
              <option>Percentage</option>
              <option>Points</option>
              <option>Grade</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={3} className="text-end">
            <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
          </Col>
          <Col xs={9}>
            <div className="border rounded p-3">
              <Form.Select id="wd-submission-type" defaultValue="Online" className="mb-3" disabled={!isFaculty}>
                <option>Online</option>
                <option>Offline</option>
              </Form.Select>
              
              <div>
                <h6>Online Entry Options</h6>
                <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" className="mb-2" disabled={!isFaculty}/>
                <Form.Check type="checkbox" id="wd-website-url" label="Website URL" defaultChecked className="mb-2" disabled={!isFaculty}/>
                <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" className="mb-2" disabled={!isFaculty}/>
                <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" className="mb-2" disabled={!isFaculty}/>
                <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" disabled={!isFaculty}/>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={3} className="text-end">
            <Form.Label>Assign</Form.Label>
          </Col>
          <Col xs={9}>
            <div className="border rounded p-3" style={{ maxWidth: '400px' }}>
              <Form.Label htmlFor="wd-assign-to">Assign to</Form.Label>
              <div className="position-relative">
                <Form.Control id="wd-assign-to" defaultValue="Everyone" className="pe-5" style={{ backgroundColor: '#f8f8f8' }} disabled={!isFaculty}/>
                <span className="position-absolute" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#6c757d'}}>✕</span>
              </div>
              
              <Form.Label htmlFor="wd-due-date" className="mt-3">Due</Form.Label>
              <Form.Control 
                type="datetime-local" 
                id="wd-due-date" 
                value={assignment.dueDate}
                onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
                disabled={!isFaculty}
              />
              
              <Row className="mt-3">
                <Col>
                  <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
                  <Form.Control 
                    type="date" 
                    id="wd-available-from" 
                    value={assignment.availableFrom}
                    onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
                    disabled={!isFaculty}
                  />
                </Col>
                <Col>
                  <Form.Label htmlFor="wd-available-until">Until</Form.Label>
                  <Form.Control 
                    type="date" 
                    id="wd-available-until" 
                    value={assignment.availableUntil}
                    onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
                    disabled={!isFaculty}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr className="my-4" />

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2" onClick={handleCancel}>
            {isFaculty ? "Cancel" : "Back"}
          </Button>
          {isFaculty && (
            <Button variant="danger" onClick={handleSave}>Save</Button>
          )}
        </div>
      </Form>
    </Container>
  );
}