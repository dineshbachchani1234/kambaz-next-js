import Link from "next/link";
import { Form, Button, Container } from "react-bootstrap";

export default function Profile() {
  return (
    <Container style={{ maxWidth: "400px", marginTop: "50px" }}>
      <h3>Profile</h3>
      <Form>
        <Form.Control
          type="text"
          placeholder="username"
          defaultValue="alice"
          className="mb-2"
        />
        <Form.Control
          type="password"
          placeholder="password"
          defaultValue="123"
          className="mb-2"
        />
        <Form.Control
          type="text"
          placeholder="First Name"
          defaultValue="Alice"
          className="mb-2"
        />
        <Form.Control
          type="text"
          placeholder="Last Name"
          defaultValue="Wonderland"
          className="mb-2"
        />
        <Form.Control
          type="date"
          defaultValue="2000-01-01"
          className="mb-2"
        />
        <Form.Control
          type="email"
          placeholder="email"
          defaultValue="alice@wonderland.com"
          className="mb-2"
        />
        <Form.Select defaultValue="USER" className="mb-3">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Select>
        <Link href="/Account/Signin" className="text-decoration-none">
  <Button variant="danger" className="w-100">
    Signout
  </Button>
</Link>
      </Form>
    </Container>
  );
}