/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { Form, Button, Container } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  useEffect(() => {
    if (!currentUser) {
      router.push("/Account/Signin");
    } else {
      setProfile(currentUser);
    }
  }, [currentUser, router]);
  
  const signout = () => {
    dispatch(setCurrentUser(null));
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("kanbas-current-user");
    }
    router.push("/Account/Signin");
  };
  
  if (!currentUser) {
    return <div>Loading...</div>;
  }
  
  return (
    <Container style={{ maxWidth: "400px", marginTop: "50px" }}>
      <h3>Profile</h3>
      <Form>
        <Form.Control
          type="text"
          placeholder="username"
          id="wd-username"
          className="mb-2"
          value={profile.username || ''}
          onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        />
        <Form.Control
          type="password"
          placeholder="password"
          id="wd-password"
          className="mb-2"
          value={profile.password || ''}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        />
        <Form.Control
          type="text"
          placeholder="First Name"
          id="wd-firstname"
          className="mb-2"
          value={profile.firstName || ''}
          onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        />
        <Form.Control
          type="text"
          placeholder="Last Name"
          id="wd-lastname"
          className="mb-2"
          value={profile.lastName || ''}
          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        />
        <Form.Control
          type="date"
          id="wd-dob"
          className="mb-2"
          value={profile.dob || ''}
          onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
        />
        <Form.Control
          type="email"
          placeholder="email"
          id="wd-email"
          className="mb-2"
          value={profile.email || ''}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
        <Form.Select 
          id="wd-role"
          className="mb-3"
          value={profile.role || 'USER'}
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Select>
        <Button 
          variant="danger" 
          className="w-100 mb-2"
          id="wd-signout-btn"
          onClick={signout}
        >
          Sign out
        </Button>
      </Form>
    </Container>
  );
}