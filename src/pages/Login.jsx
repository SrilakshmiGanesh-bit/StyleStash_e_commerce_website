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

  const users = JSON.parse(
    localStorage.getItem("stylestashUsers") || "[]"
  );

  const normalizedEmail = email.trim().toLowerCase();

  if (isSignUp) {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const existingUser = users.find(
      (user) => user.email === normalizedEmail
    );

    if (existingUser) {
      alert("Account already exists. Please sign in.");
      setIsSignUp(false);
      return;
    }

    const newUser = {
      username,
      email: normalizedEmail,
      password,
    };

    users.push(newUser);

    localStorage.setItem(
      "stylestashUsers",
      JSON.stringify(users)
    );

    alert("Account created successfully!");
    navigate("/home");
  } else {
    const existingUser = users.find(
      (user) => user.email === normalizedEmail
    );

    if (!existingUser) {
      alert("Account not found. Please sign up.");
      setIsSignUp(true);
      return;
    }

    if (existingUser.password !== password) {
      alert("Incorrect password!");
      return;
    }

    alert("Login successful!");
    navigate("/home");
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
