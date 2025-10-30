/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/[cid]/reducer";
import { enrollUserInCourse, unenrollUserFromCourse } from "../Enrollments/reducer";
import { useState } from "react";
import Link from "next/link";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row, FormControl } from "react-bootstrap";

export default function Dashboard() {
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.webp", description: "New Description"
  });
  const [showAllCourses, setShowAllCourses] = useState(false);
  
  const isFaculty = currentUser?.role === "FACULTY";
  
  // Check if user is enrolled in a course
  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id &&
        enrollment.course === courseId
    );
  };
  
  // Filter courses based on enrollment view mode
  const displayedCourses = showAllCourses 
    ? courses 
    : courses.filter((course: any) =>
        currentUser && enrollments.some(
          (enrollment: any) =>
            enrollment.user === currentUser._id &&
            enrollment.course === course._id
        )
      );
  
  const handleEnroll = (courseId: string) => {
    if (!currentUser) return;
    dispatch(enrollUserInCourse({ user: currentUser._id, course: courseId }));
  };
  
  const handleUnenroll = (courseId: string) => {
    if (!currentUser) return;
    dispatch(unenrollUserFromCourse({ user: currentUser._id, course: courseId }));
  };
  
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      
      {isFaculty && (
        <>
          <h5>New Course
            <Button 
              variant="primary" 
              className="float-end"
              id="wd-enrollments-btn"
              onClick={() => setShowAllCourses(!showAllCourses)}
            >
              {showAllCourses ? "Show Enrolled" : "Enrollments"}
            </Button>
            <button className="btn btn-primary float-end me-2"
                    id="wd-add-new-course-click"
                    onClick={() => {
                      const { _id, ...courseWithoutId } = course;
                      dispatch(addNewCourse(courseWithoutId));
                      setCourse({
                        _id: "0", 
                        name: "New Course", 
                        number: "New Number",
                        startDate: "2023-09-10", 
                        endDate: "2023-12-15",
                        image: "/images/reactjs.webp", 
                        description: "New Description"
                      });
                    }}> Add </button>
            <button className="btn btn-warning float-end me-2"
                    id="wd-update-course-click"
                    onClick={() => dispatch(updateCourse(course))}> Update </button>
          </h5>
          <FormControl value={course.name} className="mb-2"
                       onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <FormControl value={course.description} rows={3} as="textarea"
                       onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
        </>
      )}
      
      {!isFaculty && (
        <>
          <Button 
            variant="primary" 
            className="float-end mb-3"
            id="wd-enrollments-btn"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "Show Enrolled" : "Enrollments"}
          </Button>
          <div className="clearfix"></div>
        </>
      )}
      
      <h2 id="wd-dashboard-published">
        {showAllCourses ? `All Courses (${courses.length})` : `Published Courses (${displayedCourses.length})`}
      </h2> 
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course: any) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark">
                  <CardImg src={course.image} variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </CardText>
                    <Button variant="primary"> Go </Button>
                    
                    {showAllCourses && currentUser && (
                      <>
                        {isEnrolled(course._id) ? (
                          <Button 
                            variant="danger" 
                            className="ms-2"
                            onClick={(event) => {
                              event.preventDefault();
                              handleUnenroll(course._id);
                            }}
                          >
                            Unenroll
                          </Button>
                        ) : (
                          <Button 
                            variant="success" 
                            className="ms-2"
                            onClick={(event) => {
                              event.preventDefault();
                              handleEnroll(course._id);
                            }}
                          >
                            Enroll
                          </Button>
                        )}
                      </>
                    )}
                    
                    {!showAllCourses && isFaculty && (
                      <>
                        <Button variant="warning" className="ms-2"
                                onClick={(event) => {
                                  event.preventDefault();
                                  setCourse(course);
                                }}
                                id="wd-edit-course-click">
                          Edit
                        </Button>
                        <Button variant="danger" className="ms-2"
                                onClick={(event) => {
                                  event.preventDefault();
                                  dispatch(deleteCourse(course._id));
                                }}
                                id="wd-delete-course-click">
                          Delete
                        </Button>
                      </>
                    )}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}