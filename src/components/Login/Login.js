import React, { useState } from "react";
import "./Login.css";
import PropTypes from "prop-types";

// the function will take credentials as an argument,
// then it willcall the fetch method using the POST option:
async function loginUser(userCredentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userCredentials),
  }).then((data) => data.json());
}

//Add in the PropType from the new prop and destructure
// the props object to pull out the setToken prop.
export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  // a form submit handler called handleSubmit that will call loginUser
  // with the username and password. Call setToken with a successful result.
  //  Call handleSubmit using the onSubmit event handler on the <form>:

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h1> Enter your credentails</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
