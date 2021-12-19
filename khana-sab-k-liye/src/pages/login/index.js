import React, { useState } from "react";
import BasicTextFields from "../../components/Input";
import { TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import "./css/style.css";
import Logo from "../../assets/Logo.png";
// import { auth } from "../../firebase";
import { useRef } from "react";

function Login() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passRef = useRef();
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCPdcGuH0U5tX6GRlPu8m5-sckdKgpK1WU`,
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Credentials Mismatch");
        }
      })
      .then((data) => {
        navigate("/home");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      ِ
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={6} md={12}>
            <div className="imgDiv">
              <img src={Logo} alt="Logo" className="logoImg" />
            </div>
            <h1 className="heading">Admin Login</h1>
            <form onSubmit={submitHandler}>
              <div className="mt-20">
                <input
                  label="Email"
                  type="email"
                  ref={emailRef}
                  className="inp"
                />
              </div>
              <div className="mt-20">
                <input
                  label="Password"
                  type="password"
                  ref={passRef}
                  className="inp"
                />
              </div>
              <div className="mt-20">
                <button type="submit" className="btnn">
                  Login
                </button>
              </div>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
