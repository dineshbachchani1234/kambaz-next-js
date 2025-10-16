/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams } from "next/navigation";
import { use } from "react";
import * as db from "../../../../Database";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function AssignmentEditor({ params }: { params: Promise<{ cid: string; aid: string }> }) {
  const { cid, aid } = use(params);
  const assignment = db.assignments.find((a: any) => a._id === aid);

  return (
    <Container className="mt-4">
      <Form>
        <div className="mb-4">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control 
            id="wd-name" 
            defaultValue={assignment?.title} 
            size="lg"
          />
        </div>
        <div className="mb-4">
          <Form.Control 
            as="textarea" 
            id="wd-description"
            rows={10}
            style={{ lineHeight: '1.8' }}
            defaultValue={`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
          />
        </div>

        <Row className="mb-3">
          <Col xs={3} className="text-end">
            <Form.Label htmlFor="wd-points">Points</Form.Label>
          </Col>
          <Col xs={9}>
            <Form.Control id="wd-points" defaultValue={100} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={3} className="text-end">
            <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
          </Col>
          <Col xs={9}>
            <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
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
            <Form.Select id="wd-display-grade-as" defaultValue="Percentage">
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
              <Form.Select id="wd-submission-type" defaultValue="Online" className="mb-3">
                <option>Online</option>
                <option>Offline</option>
              </Form.Select>
              
              <div>
                <h6>Online Entry Options</h6>
                <Form.Check 
                  type="checkbox" 
                  id="wd-text-entry" 
                  label="Text Entry" 
                  className="mb-2"
                />
                <Form.Check 
                  type="checkbox" 
                  id="wd-website-url" 
                  label="Website URL" 
                  defaultChecked
                  className="mb-2"
                />
                <Form.Check 
                  type="checkbox" 
                  id="wd-media-recordings" 
                  label="Media Recordings" 
                  className="mb-2"
                />
                <Form.Check 
                  type="checkbox" 
                  id="wd-student-annotation" 
                  label="Student Annotation" 
                  className="mb-2"
                />
                <Form.Check 
                  type="checkbox" 
                  id="wd-file-upload" 
                  label="File Uploads" 
                />
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
                <Form.Control 
                  id="wd-assign-to" 
                  defaultValue="Everyone" 
                  className="pe-5"
                  style={{ backgroundColor: '#f8f8f8' }}
                />
                <span 
                  className="position-absolute" 
                  style={{ 
                    right: '10px', 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    color: '#6c757d'
                  }}
                >
                  ✕
                </span>
              </div>
              
              <Form.Label htmlFor="wd-due-date" className="mt-3">Due</Form.Label>
              <Form.Control 
                type="datetime-local" 
                id="wd-due-date" 
                defaultValue="2024-05-13T23:59" 
              />
              
              <Row className="mt-3">
                <Col>
                  <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
                  <Form.Control 
                    type="date" 
                    id="wd-available-from" 
                    defaultValue="2024-05-06" 
                  />
                </Col>
                <Col>
                  <Form.Label htmlFor="wd-available-until">Until</Form.Label>
                  <Form.Control 
                    type="date" 
                    id="wd-available-until" 
                    defaultValue="2024-05-20" 
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr className="my-4" />

        <div className="d-flex justify-content-end">
          <Link href={`/Courses/${cid}/Assignments`}>
            <Button variant="secondary" className="me-2">
              Cancel
            </Button>
          </Link>
          <Link href={`/Courses/${cid}/Assignments`}>
            <Button variant="danger">
              Save
            </Button>
          </Link>
        </div>
      </Form>
    </Container>
  );
}