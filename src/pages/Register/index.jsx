import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    userName: "",
    password: "",
    roleId: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const payload = {
      ...form,
      roleId: parseInt(form.roleId),
    };

    axios
      .post("https://api.mudoapi.site/register", payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={form.name}
        name="name"
        onChange={handleChange}
        placeholder="name"
      />
      <input
        type="test"
        value={form.userName}
        name="userName"
        onChange={handleChange}
        placeholder="username"
      />
      <input
        type="password"
        value={form.password}
        name="password"
        onChange={handleChange}
        placeholder="password"
      />
      <input
        type="text"
        value={form.roleId}
        name="roleId"
        onChange={handleChange}
        placeholder="role"
      />

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Register;

// protectedRoute
// Delete
// Create
