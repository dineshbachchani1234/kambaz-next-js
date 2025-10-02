import Link from "next/link";
import { Form, Button, Container } from "react-bootstrap";

export default function Signup() {
  return (
    <Container style={{ maxWidth: "400px", marginTop: "50px" }}>
      <h3>Signup</h3>
      <Form>
        <Form.Control
          type="text"
          placeholder="username"
          className="mb-2"
        />
        <Form.Control
          type="password"
          placeholder="password"
          className="mb-2"
        />
        <Form.Control
          type="password"
          placeholder="verify password"
          className="mb-3"
        />
        <Button variant="primary" className="w-100 mb-2" as={Link} href="/Account/Profile">
          Signup
        </Button>
        <Link href="/Account/Signin" className="text-decoration-none">
          Signin
        </Link>
      </Form>
    </Container>
  );
}