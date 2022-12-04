import { useState } from "react";
import { signUpFirebase } from "../../config/firebase";
import "./signup.css";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function signup() {
    try {
      await signUpFirebase({ fullName, email, password });
      alert("registered successfully");
    } catch (e) {
      alert("Please enter right information");
    }
  }
  return (
    <div className="signup-main">
      <div className="signup">
        <input
          className="signup-fields"
          type="text"
          placeholder="Enter your full name"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        />
        <input
          className="signup-fields"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="signup-fields"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          className="signup-fields"
          type="password"
          placeholder="Confirm your password"
        />
        <button onClick={signup} className="signup-btn">
          Sign up
        </button>
        <p className="signup-login">
          You have already account ?{" "}
          <a href="Signin" className="signup-login-link">
            login
          </a>
        </p>
      </div>
    </div>
  );
}
export default Signup;
