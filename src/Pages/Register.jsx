import { useState } from "react";
import Navibar from "../Component/Navibar";
import "./Register.css";
import { handleSub } from "../Component/Api";
import { useNavigate } from "react-router-dom";
("");
function Register() {
  const navigate = useNavigate();
  const [userRegister, setUserRegister] = useState({
    _id: "",
    FName: "",
    LN: "",
    Email: "",
    Password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reg = {
        FirstName: userRegister.FName,
        LastName: userRegister.LN,
        Email: userRegister.Email,
        Password: userRegister.Password,
      };
      await handleSub(reg);
      setUserRegister({ FName: "", LN: "", Email: "", Password: "" });
      alert("user successfuly registered");
      navigate("/Login", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Navibar />
      <RegisterForm
        userRegister={userRegister}
        setUserRegister={setUserRegister}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

function RegisterForm({ userRegister, setUserRegister, handleSubmit }) {
  return (
    <div className="sign-in__wrapper">
      <form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <img
          className="img-thumbnail mx-auto d-block mb-2"
          src="/images/4.jpg"
          alt="YourBook"
        />
        <div className="h4 mb-2 text-center">Register</div>
        <div className="mb-3">
          <div>
            <label htmlFor="exampleInputEmail1" className="form-label">
              First name
            </label>
            <input
              required
              placeholder="Enter your first name"
              type="text"
              className="form-control"
              id="firstname"
              aria-label="First name"
              value={userRegister.FName}
              onChange={(e) =>
                setUserRegister({ ...userRegister, FName: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Last name
            </label>
            <input
              required
              placeholder="Enter your last name"
              type="text"
              className="form-control"
              id="lastname"
              aria-label="Last name"
              value={userRegister.LN}
              onChange={(e) =>
                setUserRegister({ ...userRegister, LN: e.target.value })
              }
            />
          </div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            required
            placeholder="Enter your email"
            type="email"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            value={userRegister.Email}
            onChange={(e) =>
              setUserRegister({ ...userRegister, Email: e.target.value })
            }
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword5" className="form-label">
            Password
          </label>
          <input
            required
            placeholder="Enter your password"
            type="password"
            id="inputPassword5"
            className="form-control"
            aria-describedby="password"
            value={userRegister.Password}
            onChange={(e) =>
              setUserRegister({ ...userRegister, Password: e.target.value })
            }
          />
          <div id="passwordHelpBlock" className="form-text">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I agree on the terms and conditions
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
}
export default Register;
