"use client"
import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";
import { account, teams } from "../../../../appwrite/appwrite";
import { login, logout } from "@/appwrite/auth.service";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const FormContent2 = () => {
  const router = useRouter();

  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [password, setPassword] = useState(localStorage.getItem('password') || '');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      if(response){
        router.push("/candidates-dashboard/dashboard");
      } else{
        router.push("/login");
      }
    } catch (error) {
      console.log(error); // Failure
    }
  }
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("session");
      await account.deleteSession("current");
      router.push("/");
    } catch (error) {
      console.log(error)
    }
  }

  const handleRememberMe = (checked) => {
    if (checked) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }

  }
  return (
    <div className="form-inner">
      <h3>Login</h3>

      {/* <!--Login Form--> */}
      <form method="post" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input type="email" name="email" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />

        </div>
        {/* password */}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
            <input type="checkbox" name="remember-me" id="remember" onChange={e => handleRememberMe(e.target.checked)} />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>
            <a href="#" className="pwd">
              Forgot password?
            </a>
          </div>
        </div>
        {/* forgot password */}

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
            on
          >
            Log In
          </button>
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
            onClick={() => handleLogout}
          >
            Logout
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account? <Link href="/register">Signup</Link>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent2;
