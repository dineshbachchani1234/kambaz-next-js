"use client"
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  
  const getHref = (link: string) => {
    if (link === "People") {
      return `/Courses/${cid}/People/Table`;
    }
    return `/Courses/${cid}/${link}`;
  };
  
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link 
          key={link}
          href={getHref(link)}
          className={`list-group-item border-0 ${
            pathname.includes(link) ? 'active' : 'text-danger'
          }`}>
          {link}
        </Link>
      ))}
    </div>
  );
}