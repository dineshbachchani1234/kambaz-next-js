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
    router.push("/Dashboard");
  };
  
  return (
    <Container style={{ maxWidth: "400px", marginTop: "50px" }}>
      <h3>Signin</h3>
      <Form>
        <Form.Control
          type="text"
          placeholder="username"
          className="mb-2"
          defaultValue={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <Form.Control
          type="password"
          placeholder="password"
          className="mb-3"
          defaultValue={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <Button 
          variant="primary" 
          className="w-100 mb-2"
          onClick={signin}
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