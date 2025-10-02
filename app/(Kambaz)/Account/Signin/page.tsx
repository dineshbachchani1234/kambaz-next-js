import Link from "next/link";
import { Form, Button, Container } from "react-bootstrap";

export default function Signin() {
  return (
    <Container style={{ maxWidth: "400px", marginTop: "50px" }}>
      <h3>Signin</h3>
      <Form>
        <Form.Control
          type="text"
          placeholder="username"
          className="mb-2"
        />
        <Form.Control
          type="password"
          placeholder="password"
          className="mb-3"
        />
        <Link href="/Dashboard" className="text-decoration-none">
          <Button variant="primary" className="w-100 mb-2">
            Signin
          </Button>
        </Link>
        <Link href="/Account/Signup" className="text-decoration-none">
          Signup
        </Link>
      </Form>
    </Container>
  );
}