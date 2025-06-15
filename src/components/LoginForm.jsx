import React, { useState } from "react";

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(username, password);
    setUsername("");
    setPassword("");
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 0 0 auto',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    gap: '5px',
    width: '250px',
  };

  const buttonStyle = {
    padding: '5px 10px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: 3,
    cursor: 'pointer',
    height: '30px',
    fontSize: '14px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    padding: '5px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    marginBottom: '5px',
    width: '100%',
    boxSizing: 'border-box',
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
          placeholder="Username"
          style={inputStyle}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
          placeholder="Password"
          style={inputStyle}
        />
      </div>
      <button style={buttonStyle} type="submit">login</button>
    </form>
  );
};

export default LoginForm;
