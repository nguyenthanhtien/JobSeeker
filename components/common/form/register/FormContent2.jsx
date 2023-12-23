"use client"
import { register } from "@/appwrite/auth.service";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const FormContent2 = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register({ email, password, name: fullName });
      console.log(response);
      if (response) {
        router.push("/");
      }
    } catch (error) {
      console.log(error); // Failure
    }
  }
  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" name="fullname" placeholder="Full Name" required onChange={e => setFullName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input type="email" name="username" placeholder="Username" required onChange={e => setEmail(e.target.value)} />
      </div>
      {/* name */}

      <div className="form-group">
        <label>Password</label>
        <input
          id="password-field"
          type="password"
          name="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)} 
        />
      </div>
      {/* password */}

      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          Register
        </button>
      </div>
      {/* login */}
    </form>
  );
};

export default FormContent2;
