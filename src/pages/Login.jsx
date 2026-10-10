
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (isSignUp) {
      const existingUser = localStorage.getItem("stylestashUser");

      if (existingUser) {
        alert("An account already exists. Please sign in.");
        setIsSignUp(false);
        return;
      }

      const user = {
        username,
        email: email.trim().toLowerCase(),
        password,
      };

      localStorage.setItem("stylestashUser", JSON.stringify(user));

      alert("Account created successfully! Please sign in.");

      setIsSignUp(false);
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    } else {
      const savedUser = localStorage.getItem("stylestashUser");

      if (!savedUser) {
        alert("Please create an account first.");
        setIsSignUp(true);
        return;
      }

      const user = JSON.parse(savedUser);

      if (
        user.email === email.trim().toLowerCase() &&
        user.password === password
      ) {
        alert("Login successful!");
        navigate("/home");
      } else {
        alert("Invalid email or password!");
      }
    }
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>StyleStash</h1>
        <p className="login-subtitle">Your style, your story.</p>

        

        {isSignUp && (
          <>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </>
        )}

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-submit">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        <p className="switch-mode">
          {isSignUp
            ? "Already have an account?"
            : "Don't have an account?"}

          <button
            type="button"
            className="switch-button"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setPassword("");
              setConfirmPassword("");
            }}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
