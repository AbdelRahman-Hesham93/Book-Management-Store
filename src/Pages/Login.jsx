import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { handleLogin } from "../Component/Api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Component/GlobalStore"; // Assuming this is your auth context
import Navibar from "../Component/Navibar";
import "./Login.css";

function Login() {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  // Get auth functions from context
  const { login } = useAuth(); // Destructure login function from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const credentials = {
        Email: inputUsername,
        Password: inputPassword,
      };

      const res = await handleLogin(credentials);

      if (res.message === "User Logged in Successfully" && res.user.jwt) {
        login(res.user.jwt);
        navigate("/Books", { replace: true });
      }
    } catch (err) {
      console.error("Login error:", err);
      setShow(true);
      setInputPassword("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="sign-in__wrapper"
      style={{ backgroundImage: "url(../assets/4.jpg" }}
    >
      <Navibar />
      <div className="sign-in__backdrop"></div>

      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <img
          className="img-thumbnail mx-auto d-block mb-2"
          src="/images/4.jpg"
          alt="YourBook"
        />
        <div className="h4 mb-2 text-center">Sign In</div>

        {show && (
          <Alert variant="danger" dismissible onClose={() => setShow(false)}>
            Incorrect username or password.
          </Alert>
        )}

        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={inputUsername}
            placeholder="Username"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button
          className="w-100"
          variant="primary"
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging In..." : "Log In"}
        </Button>

        <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
          Made by Abdo | &copy;2025
        </div>
      </Form>
    </div>
  );
}

export default Login;
