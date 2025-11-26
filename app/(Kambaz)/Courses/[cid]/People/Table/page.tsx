/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import PeopleDetails from "../Details";

export default function PeopleTable({ 
  users = [], 
  fetchUsers 
}: { 
  users?: any[]; 
  fetchUsers: () => void; 
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);
  
  return (
    <div id="wd-people-table">
      {showDetails && (
        <PeopleDetails
          uid={showUserId}
          onClose={() => {
            setShowDetails(false);
            fetchUsers();
          }}
        />
      )}
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">
                  <Link
                    href="#"
                    className="text-decoration-none"
                    onClick={() => {
                      setShowDetails(true);
                      setShowUserId(user._id);
                    }}
                  >
                    {user.firstName}
                  </Link>
                </span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}