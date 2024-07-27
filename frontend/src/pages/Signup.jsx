import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [userType, setUserType] = useState("admin");
  const navigate = useNavigate();

  // signup
  const signupSubmit = async (userDetails) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
   
    if (res.ok) {
      toast.success(`Signup success`);
      return navigate("/");
    } else {
      toast.error(`Please check the input data`);
      return navigate("/signup");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const userDetails = {
      userName,
      password,
      email
    };

    signupSubmit(userDetails);
  };

  return (
    <div className=" bg-grey-950 flex items-center justify-center h-screen">
      <div className="bg-slate-800 p-10 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          SIGN UP
        </h2>
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Sign Up
            </button>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;


// signup-page--------------------------------------------------------------------------------------------------


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";



// import img from '../images/richard-sagredo-mD_Q_sGubDU-unsplash.jpg';



// const style = {
//   backgroundImage: `url(${img})`,
//   backgroundRepeat:'no-repeat',
//   backgroundSize:'cover'
// }

// const SignupPage = () => {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [userType, setUserType] = useState("admin");
//   const navigate = useNavigate();

//   // Signup function
//   const signupSubmit = async (userDetails) => {
//     const res = await fetch("/api/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userDetails),
//     });

//     if (res.ok) {
//       toast.success("Signup successful!");
//       return navigate("/");
//     } else {
//       toast.error("Please check the input data");
//       return navigate("/signup");
//     }
//   };

//   const submitForm = (e) => {
//     e.preventDefault();
//     const userDetails = {
//       userName,
//       password,
//       email,
//       userType
//     };

//     signupSubmit(userDetails);
//   };

//   return (
//     <div style={style} className=" flex items-center justify-center h-screen">
//       <div className=" p-10 rounded-lg shadow-lg max-w-sm w-full bg-gray-900">
//         <h2 className="text-3xl font-bold text-white mb-4 text-center">
//           Sign Up
//         </h2>
//         <form onSubmit={submitForm}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
//               Name:
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//               className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
//               Email:
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
//               Password:
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="userType" className="block text-gray-700 font-bold mb-2">
//               User Type:
//             </label>
//             <select
//               id="userType"
//               className="border rounded w-full py-2 px-3"
//               required
//               value={userType}
//               onChange={(e) => setUserType(e.target.value)}
//             >
//               <option value="admin">Admin</option>
//               <option value="user">User</option>
//             </select>
//           </div>
//           <div className="flex items-center justify-between mb-6">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-900"
//             >
//               Sign Up
//             </button>
//           </div>
//           <p className="text-center text-white">
//             Already have an account?{" "}
//             <Link to="/" className="text-blue-500
//              hover:underline">
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;
