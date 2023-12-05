import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [formData, setformData] = useState("");
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center">Sign UP</h1>
      <form className="flex flex-col gap-4 p-3" onSubmit={handleSubmit}>
        <input
          className="bg-slate-100 rounded-lg p-3"
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
        />
        <input
          className="bg-slate-100 rounded-lg p-3"
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          className="bg-slate-100 rounded-lg p-3"
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <button className="uppercase bg-slate-700 text-white rounded-lg p-3 hover:opacity-90 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div className="flex p-3 gap-2 mt-5">
        <p>Have an account ?</p>
        <Link to="/sign-in">
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
