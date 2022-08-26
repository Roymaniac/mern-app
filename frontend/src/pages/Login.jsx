import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h3>
          <FaSignInAlt /> Login
        </h3>
        <p>Sign into your account</p>
      </section>

      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter a valid email address"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <button className="btn btn-block">Login</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
