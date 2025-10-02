"use client"
import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaInbox } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { MdHistory, MdHelp } from "react-icons/md";
import Link from "next/link";

export default function MobileNavigation() {
  const [show, setShow] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowCourses(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Hamburger Menu Button */}
      <button 
        className="btn d-md-none position-fixed top-0 start-0 m-3 bg-dark text-white z-3"
        onClick={handleShow}
        style={{ zIndex: 1050 }}
      >
        <FaBars size={24} />
      </button>

      {/* Main Canvas Menu */}
      <Offcanvas show={show} onHide={handleClose} placement="start" className="bg-white">
        <Offcanvas.Header className="border-bottom">
          <Offcanvas.Title className="d-flex align-items-center">
            <span className="text-danger fw-bold fs-4">🎯 CANVAS</span>
          </Offcanvas.Title>
          <button className="btn" onClick={handleClose}>
            <FaTimes />
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <div className="list-group list-group-flush">
            <Link href="/Dashboard" className="list-group-item list-group-item-action border-0 py-3" onClick={handleClose}>
              <AiOutlineDashboard className="me-3 text-danger" size={20} />
              Dashboard
            </Link>
            
            <Link href="/Account" className="list-group-item list-group-item-action border-0 py-3" onClick={handleClose}>
              <FaRegCircleUser className="me-3 text-secondary" size={20} />
              Account
              <span className="float-end">›</span>
            </Link>
            
            <button 
              className="list-group-item list-group-item-action border-0 py-3 text-start"
              onClick={() => setShowCourses(!showCourses)}
            >
              <LiaBookSolid className="me-3 text-danger" size={20} />
              Courses
              <span className="float-end">›</span>
            </button>
            
            <Link href="/Calendar" className="list-group-item list-group-item-action border-0 py-3" onClick={handleClose}>
              <IoCalendarOutline className="me-3 text-danger" size={20} />
              Calendar
            </Link>
            
            <Link href="/Inbox" className="list-group-item list-group-item-action border-0 py-3" onClick={handleClose}>
              <FaInbox className="me-3 text-danger" size={20} />
              Inbox
              <span className="badge bg-danger rounded-pill ms-2">23</span>
            </Link>
            
            <Link href="/History" className="list-group-item list-group-item-action border-0 py-3" onClick={handleClose}>
              <MdHistory className="me-3 text-secondary" size={20} />
              History
              <span className="float-end">›</span>
            </Link>
            
            <Link href="/Help" className="list-group-item list-group-item-action border-0 py-3" onClick={handleClose}>
              <MdHelp className="me-3 text-secondary" size={20} />
              Help
              <span className="float-end">›</span>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Courses Submenu */}
      <Offcanvas show={showCourses} onHide={() => setShowCourses(false)} placement="end" className="bg-dark text-white">
        <Offcanvas.Header className="border-bottom border-secondary">
          <button className="btn text-white" onClick={() => setShowCourses(false)}>
            ‹ Back
          </button>
          <Offcanvas.Title className="ms-auto">Courses</Offcanvas.Title>
          <button className="btn text-white" onClick={handleClose}>
            <FaTimes />
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <div className="list-group list-group-flush bg-dark">
            {['Home', 'Modules', 'Piazza', 'Zoom Meetings', 'Assignments', 'Quizzes', 'Grades', 'People', 'Settings'].map((item) => (
              <Link 
                key={item}
                href={`/Courses/1234/${item.replace(' ', '')}`} 
                className="list-group-item list-group-item-action bg-dark text-white border-0 border-bottom border-secondary py-3"
                onClick={handleClose}
              >
                {item}
              </Link>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}