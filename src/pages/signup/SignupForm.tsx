import React, { useState } from "react";
import { API_ENDPOINT } from "../../config/constants";
import { useNavigate } from "react-router-dom";

const SignupForm: React.FC = () => {
  const [organisationName, setorganisationName] = useState("");
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_ENDPOINT}/organisations`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: organisationName,
          user_name: userName,
          email: userEmail,
          password: userPassword,
        }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }
      console.log("SignUp Successfull");

      const data = await response.json();

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userData", JSON.stringify(data.user));

      alert("Signup Successful!");

      navigate("/dashboard");
    } catch (error) {
      console.log("signup failed:", error);
      alert("Signup Failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block text-gray-700 font-semibold mb-2">
        Organisation Name:
      </label>
      <input
        name="organisationName"
        id="organisationName"
        type="text"
        value={organisationName}
        required
        onChange={(e) => setorganisationName(e.target.value)}
        className="w-full border  rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-blue-500 focus:shadow-outline-blue "
      />

      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Your Name:
        </label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={userName}
          required
          onChange={(e) => setuserName(e.target.value)}
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          value={userEmail}
          required
          onChange={(e) => setuserEmail(e.target.value)}
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Password:
        </label>
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          value={userPassword}
          required
          onChange={(e) => setuserPassword(e.target.value)}
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
      </div>

      <button className=" w-full bg-gray-700 hover:bg-gray-800 text-black font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">
        Sign up
      </button>
    </form>
  );
};
export default SignupForm
