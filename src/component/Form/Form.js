import React, { useState } from "react";
import style from "./form.module.css";

export default function From() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const handName = (e) => {
    setUser({ name: e.target.value, email, password });
  };

  const handEmail = (e) => {
    setUser({ name, email: e.target.value, password });
  };

  const handPassword = (e) => {
    setUser({ name, email, password: e.target.value });
  };

  const handForm = (e) => {
    let userInfo = {
      name,
      email,
      password,
    };

    console.log("From is called");
    console.log(userInfo);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Register</h1>
      <form action="" onSubmit={handForm}>
        <div className={style.fromGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handName}
            required
          />
        </div>

        <div className={style.fromGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handEmail}
            required
          />
        </div>

        <div className={style.fromGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handPassword}
            required
          />
        </div>

        <div className={style.fromGroup}>
          <button type="submit"> Register</button>
        </div>
      </form>
    </div>
  );
}
