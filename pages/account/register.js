import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/AuthForm.module.css";
import AuthContext from "@/context/AuthContext";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register, error } = useContext(AuthContext);

  const handleSubmit = (e) => {
    register({ username, email, password });
    e.preventDefault();

    if (password != passwordConfirm) {
      toast.error("Passwords do not match");
      return;
    }
  };

  return (
    <Layout title="User Register">
      <div className={styles.auth}>
        <h1>
          <FaUser /> Register
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            name="email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            name="passwordConfirm"
            id="passwordConfirm"
            type="password"
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
          />

          <input type="submit" value="Submit" className="btn" />

          <p>
            Already have an account? <Link href="/account/login">Log In</Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}
