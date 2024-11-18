import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../firebaseConfig";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!email) formErrors.email = "Email is required";
    if (!password) formErrors.password = "Password is required";
    else if (password.length < 6) formErrors.password = "Password must be at least 6 characters";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Login successful");
      navigate("/"); 
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Logged in as:", user.displayName);
      navigate("/"); 
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-full max-w-[32rem] px-4">
        <div className="text-3xl font-bold text-start mb-6">Login</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-slate-800 text-white rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full py-3 bg-white text-black border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center justify-center gap-4"
            >
              Login with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
