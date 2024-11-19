// import React from 'react';
// import axios from 'axios';
// import "../styles/SignUp.css"
// const SignUp = () => {
//   return (
//     <div>
//       <div className="container">
//         <h1>Signup</h1>
//         <form>
//           <div className="form-group">
//             <label htmlFor="username">First Name</label>
//             <input type="text" id="username" name="username" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="username">Last Name</label>
//             <input type="text" id="username" name="username" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input type="text" id="username" name="username" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" name="email" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Phone</label>
//             <input type="tel" id="phone" name="phone" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" name="password" required />
//           </div>
//           {/* <div className="form-group">
//             <label htmlFor="role">Role</label>
//             <select id="role" name="role" required>
//               <option value="" disabled defaultValue>
//                 Select your role
//               </option>
//               <option value="user">User</option>  
//               <option value="admin">Admin</option>

//             </select>
//           </div> */}
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from 'react';
import "../styles/SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phone: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate API call and save user data on success
    setMessage('User registered successfully');
    
    // Save the user details in localStorage
    localStorage.setItem('user', JSON.stringify(formData));
  };

  return (
    <div className="container">
      <h1>Signup</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
