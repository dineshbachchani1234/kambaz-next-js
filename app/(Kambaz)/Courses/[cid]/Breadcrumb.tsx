"use client";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ course }: { course: { name: string } | undefined }) {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);
  
  // pathParts: ["Courses", "CS1234", "Home"] or ["Courses", "CS1234", "Assignments", "A101"]
  const section = pathParts[2] || "Home"; // Get section from index 2
  const subsection = pathParts[3]; // Get subsection if it exists
  
  // Check if we're in an assignment detail page
  if (section === "Assignments" && subsection) {
    return (
      <span>
        {course?.name} &gt; Assignments &gt; {subsection}
      </span>
    );
  }
  
  // For all other pages
  return (
    <span>
      {course?.name} &gt; {section}
    </span>
  );
}