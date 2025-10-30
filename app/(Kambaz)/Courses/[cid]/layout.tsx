/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ReactNode, use, useState } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";

export default function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = use(params);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);
  const [showNav, setShowNav] = useState(true);
  
  return (
    <ProtectedRoute courseId={cid}>
      <div id="wd-courses">
        <h2 className="text-danger">
          <FaAlignJustify 
            className="me-4 fs-4 mb-1" 
            style={{ cursor: "pointer" }}
            onClick={() => setShowNav(!showNav)}
          />
          <Breadcrumb course={course} />
        </h2>
        <hr />
        <div className="d-flex">
          {showNav && (
            <div className="d-none d-md-block">
              <CourseNavigation cid={cid} />
            </div>
          )}
          <div className="flex-fill">
            {children}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}