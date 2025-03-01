import React, { useState } from "react";
// import "./styles.css";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex justify-center items-center"
      style={{ backgroundImage: "url('/images/bbc-bg.jpg')" }}
    >
      <div className="bg-black bg-opacity-80 p-8 rounded-lg w-96 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">BBC Register</h2>
        <p className="mb-4">You must be 18 or over to register for a BBC account</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 mb-4 text-black rounded-lg border-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          >
            Continue
          </button>
        </form>
        <p className="mt-4 text-sm">
          Already have a BBC account? <a href="#" className="text-blue-400">Sign in now</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
