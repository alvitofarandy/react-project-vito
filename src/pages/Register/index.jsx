import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    userName: "",
    password: "",
    role: "",
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
      role: parseInt(form.role),
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
      />
      <input
        type="test"
        value={form.userName}
        name="userName"
        onChange={handleChange}
      />
      <input
        type="password"
        value={form.password}
        name="password"
        onChange={handleChange}
      />
      <input
        type="text"
        value={form.role}
        name="role"
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Register;
