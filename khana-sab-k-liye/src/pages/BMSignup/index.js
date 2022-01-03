import React, { useState } from "react";
import BasicTextFields from "../../components/Input";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import BasicButtons from "../../components/Button";
import "./css/styles.css";
import Logo from "../../assets/Logo.png";
import PersistentDrawerLeft from "../../components/navbar";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function BMSignup() {
  const [email, getEmail] = useState("");
  const [password, getpassword] = useState("");
  const [barnchName, getBarnchName] = useState("");
  const navigate = useNavigate();

  const Register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        alert(user.email + "Manager created Sucessfully");
        await setDoc(doc(db, "Branch_User", user.uid), {
          Email: email,
          password: password,
          BranchName: barnchName,
        });
        navigate("/home");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        getEmail("");
        getpassword("");
        getBarnchName("");
      });
  };

  return (
    <div>
      {/* <PersistentDrawerLeft /> */}
      <div className="imgDiv">
        <img src={Logo} alt="Logo" className="logoImg" />
      </div>
      ِ
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={6} md={12}>
            <h1 className="heading">Branch Manager Signup</h1>
            <div className="mt-20">
              <BasicTextFields
                label="Email"
                type="email"
                onChange={(e) => {
                  getEmail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div className="mt-20">
              <BasicTextFields
                label="Password"
                type="password"
                onChange={(f) => {
                  getpassword(f.target.value);
                }}
                value={password}
              />
            </div>
            <div className="mt-20">
              <BasicTextFields
                label="Branch Name"
                type="text"
                onChange={(e) => {
                  getBarnchName(e.target.value);
                }}
                value={barnchName}
              />
            </div>
            <div className="mt-20 mb-20">
              <BasicButtons title="SIGN UP" onClick={Register} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default BMSignup;
