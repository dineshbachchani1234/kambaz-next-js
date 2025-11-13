/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const pathname = usePathname();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  
  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link 
          key={link}
          href={`/Account/${link}`}
          className={`list-group-item border-0 text-decoration-none bg-white ${
            pathname.endsWith(link.toLowerCase()) 
              ? 'text-black border-start border-dark border-4' 
              : 'text-danger'
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}