"use client"
import { usePathname } from 'next/navigation';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaFlask } from "react-icons/fa";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
export default function KambazNavigation() {
  const pathname = usePathname();
  return (
    <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 110 }}
    id="wd-kambaz-navigation">
     <ListGroupItem className="bg-black border-0 text-center" as="a"
     target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
<img src="/images/NEU.png" width="75px" alt="Northeastern University" />
</ListGroupItem>
<ListGroupItem className={`border-0 text-center ${pathname === '/Account' ? 'bg-white' : 'bg-black'}`}>
  <Link href="/Account" id="wd-account-link" className={`text-decoration-none ${pathname === '/Account' ? 'text-danger' : 'text-white'}`}>
         <FaRegCircleUser className="fs-1 text-white" />
         <br />
         Account
       </Link>
       </ListGroupItem>

       <ListGroupItem className={`border-0 text-center ${pathname === '/Dashboard' ? 'bg-white' : 'bg-black'}`}>
  <Link href="/Dashboard" id="wd-dashboard-link" className={`text-decoration-none ${pathname === '/Dashboard' ? 'text-danger' : 'text-white'}`}>
         <AiOutlineDashboard className="fs-1 text-danger" />
         <br />
         Dashboard
       </Link>
     </ListGroupItem>

     <ListGroupItem className={`border-0 text-center ${pathname.startsWith('/Courses') ? 'bg-white' : 'bg-black'}`}>
     <Link href="/Dashboard" id="wd-course-link" className={`text-decoration-none ${pathname.startsWith('/Courses') ? 'text-danger' : 'text-white'}`}>
    <LiaBookSolid className="fs-1 text-danger" />
    <br />
    Courses
  </Link>
</ListGroupItem>

<ListGroupItem className={`border-0 text-center ${pathname === '/Calendar' ? 'bg-white' : 'bg-black'}`}>
  <Link href="/Calendar" id="wd-calendar-link" className={`text-decoration-none ${pathname === '/Calendar' ? 'text-danger' : 'text-white'}`}>
    <IoCalendarOutline className="fs-1 text-danger" />
    <br />
    Calendar
  </Link>
</ListGroupItem>

<ListGroupItem className={`border-0 text-center ${pathname === '/Inbox' ? 'bg-white' : 'bg-black'}`}>
  <Link href="/Inbox" id="wd-inbox-link" className={`text-decoration-none ${pathname === '/Inbox' ? 'text-danger' : 'text-white'}`}>
    <FaInbox className="fs-1 text-danger" />
    <br />
    Inbox
  </Link>
</ListGroupItem>

<ListGroupItem className={`border-0 text-center ${pathname.startsWith('/Labs') ? 'bg-white' : 'bg-black'}`}>
  <Link href="/Labs/Lab1" id="wd-labs-link" className={`text-decoration-none ${pathname.startsWith('/Labs') ? 'text-danger' : 'text-white'}`}>
  <FaFlask className="fs-1 text-danger" />
    <br />
    Labs
  </Link>
</ListGroupItem>

     </ListGroup>
  );
}
