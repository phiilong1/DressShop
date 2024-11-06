import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!email) formErrors.email = "Email is required";
    if (!password) formErrors.password = "Password is required";
    else if (password.length < 6) formErrors.password = "Password must be at least 6 characters";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Xử lý đăng nhập ở đây (ví dụ: gửi yêu cầu API)
      alert("Form submitted successfully");
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
          <div className="text-center mt-8 text-base">
            Don't have an account?{" "}
            <a href="signup" className="text-red-500">
              Create an account.
            </a>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="mx-4 text-black font-medium">or</div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="text-center">
            <button
              type="button"
              className="w-full py-3 bg-white text-black border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center justify-center gap-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 150 150"
                className="w-6 h-6"
              >
                <path
                  className="st14"
                  d="M120,76.1c0-3.1-0.3-6.3-0.8-9.3H75.9v17.7h24.8c-1,5.7-4.3,10.7-9.2,13.9l14.8,11.5C115,101.8,120,90,120,76.1L120,76.1z"
                />
                <path
                  className="st15"
                  d="M75.9,120.9c12.4,0,22.8-4.1,30.4-11.1L91.5,98.4c-4.1,2.8-9.4,4.4-15.6,4.4c-12,0-22.1-8.1-25.8-18.9L34.9,95.6C42.7,111.1,58.5,120.9,75.9,120.9z"
                />
                <path
                  className="st12"
                  d="M50.1,83.8c-1.9-5.7-1.9-11.9,0-17.6L34.9,54.4c-6.5,13-6.5,28.3,0,41.2L50.1,83.8z"
                />
                <path
                  className="st13"
                  d="M75.9,47.3c6.5-0.1,12.9,2.4,17.6,6.9L106.6,41C98.3,33.2,87.3,29,75.9,29.1c-17.4,0-33.2,9.8-41,25.3l15.2,11.8C53.8,55.3,63.9,47.3,75.9,47.3z"
                />
              </svg>
              Login with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
