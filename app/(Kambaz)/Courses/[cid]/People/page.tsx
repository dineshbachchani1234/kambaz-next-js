/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { use, useState, useEffect } from "react";
import PeopleTable from "./Table/page";
import * as client from "../../client";

export default function People({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = use(params);
  const [users, setUsers] = useState<any[]>([]);
  
  const fetchUsers = async () => {
    try {
      const enrolledUsers = await client.findUsersForCourse(cid);
      setUsers(enrolledUsers);
    } catch (error) {
    }
  };
  
  useEffect(() => {
    fetchUsers();
  }, [cid]);

  return <PeopleTable users={users} fetchUsers={fetchUsers} />;
}