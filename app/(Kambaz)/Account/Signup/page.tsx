/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import * as client from "../client";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const [verifyPassword, setVerifyPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  
  const signup = async () => {
    if (user.password !== verifyPassword) {
      alert("Passwords do not match");
      return;
    }
    
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      
      // Save to localStorage
      if (typeof window !== "undefined") {
        window.localStorage.setItem("kanbas-current-user", JSON.stringify(currentUser));
      }
      
      router.push("/Account/Profile");
    } catch (error: any) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      signup();
    }
  };
  
  return (
    <Container style={{ maxWidth: "400px", marginTop: "50px" }}>
      <h3>Signup</h3>
      <Form onSubmit={(e) => { e.preventDefault(); signup(); }}>
        <Form.Control
          type="text"
          placeholder="username"
          className="mb-2"
          value={user.username || ''}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          onKeyPress={handleKeyPress}
        />
        <Form.Control
          type="password"
          placeholder="password"
          className="mb-2"
          value={user.password || ''}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          onKeyPress={handleKeyPress}
        />
        <Form.Control
          type="password"
          placeholder="verify password"
          className="mb-3"
          value={verifyPassword}
          onChange={(e) => setVerifyPassword(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button 
          variant="primary" 
          className="w-100 mb-2"
          type="submit"
          id="wd-signup-btn"
        >
          Signup
        </Button>
        <Link href="/Account/Signin" className="text-decoration-none">
          Signin
        </Link>
      </Form>
    </Container>
  );
}