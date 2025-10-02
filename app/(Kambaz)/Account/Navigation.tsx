"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function AccountNavigation() {
  const pathname = usePathname();
  
  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      <Link 
        href="/Account/Signin" 
        className={`list-group-item border-0 text-decoration-none bg-white ${
          pathname === '/Account/Signin' 
            ? 'text-black border-start border-dark border-4' 
            : 'text-danger'
        }`}
      >
        Signin
      </Link>
      <Link 
        href="/Account/Signup" 
        className={`list-group-item border-0 text-decoration-none bg-white ${
          pathname === '/Account/Signup' 
            ? 'text-black border-start border-dark border-4' 
            : 'text-danger'
        }`}
      >
        Signup
      </Link>
      <Link 
        href="/Account/Profile" 
        className={`list-group-item border-0 text-decoration-none bg-white ${
          pathname === '/Account/Profile' 
            ? 'text-black border-start border-dark border-4' 
            : 'text-danger'
        }`}
      >
        Profile
      </Link>
    </div>
  );
}