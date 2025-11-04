/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import * as db from "../../Database";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();
  
  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) {
      alert("Username or password is incorrect");
      return;
    }
    dispatch(setCurrentUser(user));
    
    // Save to localStorage
    if (typeof window !== "undefined") {
      window.localStorage.setItem("kanbas-current-user", JSON.stringify(user));
    }
    
    router.push("/Dashboard");
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      signin();
    }
  };
  
  return (
    <Container style={{ maxWidth: "400px", marginTop: "50px" }}>
      <h3>Signin</h3>
      <Form onSubmit={(e) => { e.preventDefault(); signin(); }}>
        <Form.Control
          type="text"
          placeholder="username"
          className="mb-2"
          value={credentials.username || ''}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          onKeyPress={handleKeyPress}
        />
        <Form.Control
          type="password"
          placeholder="password"
          className="mb-3"
          value={credentials.password || ''}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          onKeyPress={handleKeyPress}
        />
        <Button 
          variant="primary" 
          className="w-100 mb-2"
          type="submit"
          id="wd-signin-btn"
        >
          Signin
        </Button>
        <Link href="/Account/Signup" className="text-decoration-none">
          Signup
        </Link>
      </Form>
    </Container>
  );
}