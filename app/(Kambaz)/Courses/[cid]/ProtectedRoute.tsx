/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ 
  children, 
  courseId 
}: { 
  children: React.ReactNode; 
  courseId: string;
}) {
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  
  useEffect(() => {
    if (!currentUser) {
      router.push("/Account/Signin");
      return;
    }
    
    // Faculty can access all courses
    if (currentUser.role === "FACULTY") {
      return;
    }
    
    const isEnrolled = enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id &&
        enrollment.course === courseId
    );
    
    if (!isEnrolled) {
      router.push("/Dashboard");
    }
  }, [currentUser, enrollments, courseId, router]);
  
  // Faculty can always access
  if (currentUser?.role === "FACULTY") {
    return <>{children}</>;
  }
  
  const isEnrolled = currentUser && enrollments.some(
    (enrollment: any) =>
      enrollment.user === currentUser._id &&
      enrollment.course === courseId
  );
  
  if (!currentUser || !isEnrolled) {
    return null;
  }
  
  return <>{children}</>;
}