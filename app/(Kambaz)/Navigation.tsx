"use client"
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";

export default function KambazNavigation() {
  const pathname = usePathname();
  const [dashboardView, setDashboardView] = useState<'dashboard' | 'courses'>('dashboard');

  useEffect(() => {
    if (!pathname.startsWith('/Dashboard') && !pathname.startsWith('/Courses')) {
      setDashboardView('dashboard');
    }
  }, [pathname]);

  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard, onClick: () => setDashboardView('dashboard') },
    { label: "Courses", path: "/Dashboard", icon: LiaBookSolid, onClick: () => setDashboardView('courses') },
    { label: "Calendar", path: "/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs/Lab1", icon: LiaCogSolid },
  ];

  const isActive = (label: string) => {
    if (label === "Dashboard") return pathname === '/Dashboard' && dashboardView === 'dashboard';
    if (label === "Courses") return (pathname === '/Dashboard' && dashboardView === 'courses') || pathname.startsWith('/Courses');
    if (label === "Labs") return pathname.startsWith('/Labs');
    return pathname.includes(label);
  };

  return (
    <div id="wd-kambaz-navigation" className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{width: 120}}>
      <a className="list-group-item bg-black border-0 text-center" target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </a>
      <a className={`list-group-item text-center border-0 ${pathname.includes("Account") ? "bg-white" : "bg-black"}`} href="/Account" id="wd-account-link">
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </a>
      {links.map((link) => (
        <Link 
          key={link.label} 
          href={link.path} 
          className={`list-group-item text-center border-0 ${isActive(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}
          onClick={link.onClick}
        >
          {link.icon({ className: `fs-1 ${isActive(link.label) ? "text-danger" : "text-white"}` })}
          <br />
          {link.label}
        </Link>
      ))}
    </div>
  );
}