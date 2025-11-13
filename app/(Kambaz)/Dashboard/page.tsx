/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useDispatch, useSelector } from "react-redux";
import { enrollUserInCourse, unenrollUserFromCourse, setEnrollments } from "../Enrollments/reducer";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row, FormControl } from "react-bootstrap";
import * as client from "../Courses/client";
import { setCourses } from "../Courses/[cid]/reducer";

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
  
  const fetchEnrollments = async () => {
    try {
      const enrollments = await client.findAllEnrollments();
      dispatch(setEnrollments(enrollments));
    } catch (error) {
      console.error(error);
    }
  };
  
  const fetchCourses = async () => {
    if (!currentUser) {
      dispatch(setCourses([]));
      return;
    }
    try {
      if (showAllCourses) {
        const allCourses = await client.fetchAllCourses();
        dispatch(setCourses(allCourses));
      } else {
        const myCourses = await client.findMyCourses();
        dispatch(setCourses(myCourses));
      }
    } catch (error) {
      console.error(error);
      dispatch(setCourses([]));
    }
  };
  
  useEffect(() => {
    fetchEnrollments();
  }, []);
  
  useEffect(() => {
    fetchCourses();
  }, [currentUser, showAllCourses]);
  
  const isFaculty = currentUser?.role === "FACULTY";
  
  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id &&
        enrollment.course === courseId
    );
  };
  
  const displayedCourses = courses;
  
  const handleEnroll = async (courseId: string) => {
    if (!currentUser) return;
    try {
      await client.enrollUserInCourse(currentUser._id, courseId);
      dispatch(enrollUserInCourse({ user: currentUser._id, course: courseId }));
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleUnenroll = async (courseId: string) => {
    if (!currentUser) return;
    try {
      await client.unenrollUserFromCourse(currentUser._id, courseId);
      dispatch(unenrollUserFromCourse({ user: currentUser._id, course: courseId }));
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleAddCourse = async () => {
    try {
      const newCourse = await client.createCourse(course);
      dispatch(setCourses([...courses, newCourse]));
      
      setCourse({
        _id: "0", 
        name: "New Course", 
        number: "New Number",
        startDate: "2023-09-10", 
        endDate: "2023-12-15",
        image: "/images/reactjs.webp", 
        description: "New Description"
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteCourse = async (courseId: string) => {
    try {
      await client.deleteCourse(courseId);
      dispatch(setCourses(courses.filter((course: any) => course._id !== courseId)));
    } catch (error) {
      console.error(error);
    }
  };
  
  const onUpdateCourse = async () => {
    try {
      await client.updateCourse(course);
      dispatch(setCourses(courses.map((c: any) => {
        if (c._id === course._id) { return course; }
        else { return c; }
      })));
    } catch (error) {
      console.error(error);
    }
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
              {showAllCourses ? "My Enrollments" : "All Enrollments"}
            </Button>
            <button className="btn btn-primary float-end me-2"
                    id="wd-add-new-course-click"
                    onClick={handleAddCourse}> Add </button>
            <button className="btn btn-warning float-end me-2"
                    id="wd-update-course-click"
                    onClick={onUpdateCourse}> Update </button>
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
            {showAllCourses ? "My Enrollments" : "All Enrollments"}
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
                <CardImg src={course.image} variant="top" width="100%" height={160} />
                <CardBody className="card-body">
                  <Link href={`/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </CardText>
                  </Link>
                  <Link href={`/Courses/${course._id}/Home`} className="text-decoration-none">
                    <Button variant="primary">Go</Button>
                  </Link>
                  
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
                  
                  {isFaculty && (
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
                                onDeleteCourse(course._id);
                              }}
                              id="wd-delete-course-click">
                        Delete
                      </Button>
                    </>
                  )}
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}