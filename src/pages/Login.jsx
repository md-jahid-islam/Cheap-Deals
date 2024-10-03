// // // // src/LoginForm.js

// // // import React, { useState } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { ToastContainer, toast } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';
// // // import ResetPassword from './ResetPassword';

// // // const Login = () => {
// // //     const [email, setEmail] = useState('');
// // //     const [password, setPassword] = useState('');
// // //     const [showPassword, setShowPassword] = useState(false);

// // //     const handleSubmit = (e) => {
// // //         e.preventDefault();
// // //         if (!email || !password) {
// // //             toast.error("Email and password are required!");
// // //             return;
// // //         }
// // //         // Simulating a successful login
// // //         toast.success("Login successful!");
// // //         // Voice text typing
// // //         const utterance = new SpeechSynthesisUtterance("Login successful");
// // //         window.speechSynthesis.speak(utterance);
// // //     };

// // //     return (
// // //         <div style={styles.container}>
// // //             <form onSubmit={handleSubmit} style={styles.loginForm}>
// // //                 <h2 style={styles.title}>Login</h2>
// // //                 <div style={styles.inputGroup}>
// // //                     <label htmlFor="email" style={styles.label}>Email</label>
// // //                     <input
// // //                         type="email"
// // //                         id="email"
// // //                         value={email}
// // //                         onChange={(e) => setEmail(e.target.value)}
// // //                         required
// // //                         style={styles.input}
// // //                     />
// // //                 </div>
// // //                 <div style={styles.inputGroup}>
// // //                     <label htmlFor="password" style={styles.label}>Password</label>
// // //                     <div style={styles.passwordGroup}>
// // //                         <input
// // //                             type={showPassword ? 'text' : 'password'}
// // //                             id="password"
// // //                             value={password}
// // //                             onChange={(e) => setPassword(e.target.value)}
// // //                             required
// // //                             style={styles.input}
// // //                         />
// // //                         <button type="button" onClick={() => setShowPassword(!showPassword)} style={styles.toggleButton}>
// // //                             {showPassword ? 'Hide' : 'Show'}
// // //                         </button>
// // //                     </div>
// // //                 </div>
// // //                 <button type="submit" style={styles.submitButton}>Login</button>
// // //                 <Link to='/ResetPassword' > allredy accound use? <span> ResetPassword</span></Link>
// // //             </form>
// // //             <ToastContainer />

// // //         </div>
// // //     );
// // // };

// // // const styles = {
// // //     container: {
// // //         display: 'flex',
// // //         justifyContent: 'center',
// // //         alignItems: 'center',
// // //         height: '100vh',
// // //         background: 'linear-gradient(135deg, #f0f0f0, #cce5ff)',
// // //         perspective: '1000px',
// // //     },
// // //     loginForm: {
// // //         width: '300px',
// // //         padding: '20px',
// // //         background: 'white',
// // //         borderRadius: '10px',
// // //         boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
// // //         transformStyle: 'preserve-3d',
// // //         animation: 'rotate 5s infinite linear',
// // //     },
// // //     title: {
// // //         textAlign: 'center',
// // //         marginBottom: '20px',
// // //     },
// // //     inputGroup: {
// // //         marginBottom: '15px',
// // //         position: 'relative',
// // //     },
// // //     label: {
// // //         marginBottom: '5px',
// // //         display: 'block',
// // //     },
// // //     input: {
// // //         width: '100%',
// // //         padding: '10px',
// // //         border: '1px solid #ccc',
// // //         borderRadius: '5px',
// // //         transition: 'border 0.3s',
// // //     },
// // //     passwordGroup: {
// // //         display: 'flex',
// // //         alignItems: 'center',
// // //     },
// // //     toggleButton: {
// // //         marginLeft: '5px',
// // //         padding: '5px',
// // //         border: 'none',
// // //         borderRadius: '5px',
// // //         background: '#007bff',
// // //         color: 'white',
// // //         cursor: 'pointer',
// // //     },
// // //     submitButton: {
// // //         width: '100%',
// // //         padding: '10px',
// // //         border: 'none',
// // //         borderRadius: '5px',
// // //         background: '#007bff',
// // //         color: 'white',
// // //         cursor: 'pointer',
// // //         transition: 'background 0.3s',
// // //     },
// // //     '@keyframes rotate': {
// // //         '0%': { transform: 'rotateY(0deg)' },
// // //         '100%': { transform: 'rotateY(360deg)' },
// // //     },
// // // };

// // // export default Login;
// // import React, { useState } from 'react';

// // const Login = () => {
// //   const [activeForm, setActiveForm] = useState('login'); // Manage which form to display
// //   const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
// //   const [errors, setErrors] = useState({});

// //   // Handle form input change
// //   const handleInputChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   // Form validation
// //   const validateForm = () => {
// //     const newErrors = {};
// //     if (!formData.email) {
// //       newErrors.email = 'Email is required';
// //     }
// //     if (!formData.password) {
// //       newErrors.password = 'Password is required';
// //     }
// //     if (activeForm === 'signUp' && formData.password !== formData.confirmPassword) {
// //       newErrors.confirmPassword = 'Passwords do not match';
// //     }
// //     return newErrors;
// //   };

// //   // Handle form submission
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const validationErrors = validateForm();
// //     if (Object.keys(validationErrors).length > 0) {
// //       setErrors(validationErrors);
// //     } else {
// //       // Process the form (e.g., send to API)
// //       console.log('Form Submitted:', formData);
// //       setErrors({});
// //       alert(`${activeForm} successful!`);
// //     }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <div style={styles.dropdown}>
// //         <button style={styles.dropdownButton}>
// //           {activeForm.charAt(0).toUpperCase() + activeForm.slice(1)}
// //         </button>
// //         <div style={styles.dropdownContent}>
// //           <button style={styles.menuItem} onClick={() => setActiveForm('login')}>
// //             Login
// //           </button>
// //           <button style={styles.menuItem} onClick={() => setActiveForm('signUp')}>
// //             Sign Up
// //           </button>
// //           <button style={styles.menuItem} onClick={() => setActiveForm('resetPassword')}>
// //             Reset Password
// //           </button>
// //         </div>
// //       </div>

// //       {/* Form */}
// //       <form onSubmit={handleSubmit} style={styles.form}>
// //         <div style={styles.inputGroup}>
// //           <label>Email:</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleInputChange}
// //             style={styles.input}
// //           />
// //           {errors.email && <span style={styles.errorText}>{errors.email}</span>}
// //         </div>

// //         <div style={styles.inputGroup}>
// //           <label>Password:</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleInputChange}
// //             style={styles.input}
// //           />
// //           {errors.password && <span style={styles.errorText}>{errors.password}</span>}
// //         </div>

// //         {activeForm === 'signUp' && (
// //           <div style={styles.inputGroup}>
// //             <label>Confirm Password:</label>
// //             <input
// //               type="password"
// //               name="confirmPassword"
// //               value={formData.confirmPassword}
// //               onChange={handleInputChange}
// //               style={styles.input}
// //             />
// //             {errors.confirmPassword && (
// //               <span style={styles.errorText}>{errors.confirmPassword}</span>
// //             )}
// //           </div>
// //         )}

// //         <button type="submit" style={styles.submitButton}>
// //           {activeForm === 'login' && 'Login'}
// //           {activeForm === 'signUp' && 'Sign Up'}
// //           {activeForm === 'resetPassword' && 'Reset Password'}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // // Inline CSS for styling
// // const styles = {
// //   container: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     // height: '100vh',
// //     backgroundColor: '#f4f4f4',
// //     perspective: '1000px', // 3D effect
// //   },
// //   dropdown: {
// //     position: 'relative',
// //     display: 'inline-block',
// //     marginBottom: '15px',
// //   },
// //   dropdownButton: {
// //     padding: '10px 20px',
// //     fontSize: '16px',
// //     cursor: 'pointer',
// //     backgroundColor: '#007bff',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: '5px',
// //     transform: 'rotateY(0deg)', // 3D rotation animation
// //     transition: 'transform 0.3s ease',
// //   },
// //   dropdownContent: {
// //     display: 'flex',
    
// //     flexDirection: 'column',
// //     backgroundColor: '#fff',
// //     minWidth: '160px',
// //     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
// //     zIndex: 1,
// //     marginTop: '12px',
// //   },
// //   menuItem: {
// //     padding: '12px 16px',
// //     cursor: 'pointer',
// //     textAlign: 'center',
// //     backgroundColor: '#007bff',
// //     color: '#fff',
// //     textDecoration: 'none',
// //     display: 'block',
// //     transition: 'background-color 0.3s ease',
// //   },
// //   menuItemHover: {
// //     backgroundColor: '#0056b3',
// //     textDecoration: 'underline', // Hover underline effect
// //   },
// //   form: {
// //     display: 'flex ',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     backgroundColor: '#fff',
// //     padding: '30px',
// //     borderRadius: '10px',
// //     boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
// //     transform: 'rotateX(0deg)', // 3D animation
// //     transition: 'transform 0.5s ease',
// //   },
// //   inputGroup: {
// //     marginBottom: '15px',
// //     width: '100%',
// //   },
// //   input: {
// //     width: '100%',
// //     padding: '10px',
// //     border: '1px solid #ccc',
// //     borderRadius: '5px',
// //   },
// //   submitButton: {
// //     padding: '10px 20px',
// //     backgroundColor: '#28a745',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: '5px',
// //     cursor: 'pointer',
// //     fontSize: '16px',
// //     transform: 'rotateY(0deg)', 
// //     transition: 'transform 0.3s ease',
// //   },
// //   errorText: {
// //     color: 'red',
// //     fontSize: '12px',
// //     marginTop: '5px',
// //   },
// // };

// // export default Login;
// import React, { useState } from 'react';

// const Login = () => {
//   const [activeForm, setActiveForm] = useState('login'); // Manage which form to display
//   const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
//   const [errors, setErrors] = useState({});

//   // Handle form input change
//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Form validation
//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     }
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     }
//     if (activeForm === 'signUp' && formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
//     return newErrors;
//   };

//   // Voice typing using SpeechSynthesis
//   const speakText = (text) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(utterance);
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setErrors({});
//       // Speak out form type and success message
//       const formType = activeForm === 'login' ? 'Login' : activeForm === 'signUp' ? 'Sign Up' : 'Reset Password';
//       speakText(`${formType} successful!`);
//       alert(`${formType} successful!`);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.dropdown}>
//         <button style={styles.dropdownButton}>
//           {activeForm.charAt(0).toUpperCase() + activeForm.slice(1)}
//         </button>
//         <div style={styles.dropdownContent}>
//           <button style={styles.menuItem} onClick={() => setActiveForm('login')}>
//             Login
//           </button>
//           <button style={styles.menuItem} onClick={() => setActiveForm('signUp')}>
//             Sign Up
//           </button>
//           <button style={styles.menuItem} onClick={() => setActiveForm('resetPassword')}>
//             Reset Password
//           </button>
//         </div>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.inputGroup}>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             style={styles.input}
//           />
//           {errors.email && <span style={styles.errorText}>{errors.email}</span>}
//         </div>

//         <div style={styles.inputGroup}>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             style={styles.input}
//           />
//           {errors.password && <span style={styles.errorText}>{errors.password}</span>}
//         </div>

//         {activeForm === 'signUp' && (
//           <div style={styles.inputGroup}>
//             <label>Confirm Password:</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleInputChange}
//               style={styles.input}
//             />
//             {errors.confirmPassword && (
//               <span style={styles.errorText}>{errors.confirmPassword}</span>
//             )}
//           </div>
//         )}

//         <button type="submit" style={styles.submitButton}>
//           {activeForm === 'login' && 'Login'}
//           {activeForm === 'signUp' && 'Sign Up'}
//           {activeForm === 'resetPassword' && 'Reset Password'}
//         </button>
//       </form>
//     </div>
//   );
// };

// // Inline CSS for styling
// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#f4f4f4',
//     perspective: '1000px', // 3D effect
//   },
//   dropdown: {
//     position: 'relative',
//     display: 'inline-block',
//     marginBottom: '20px',
//   },
//   dropdownButton: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     transform: 'rotateY(0deg)', // 3D rotation animation
//     transition: 'transform 0.3s ease',
//   },
//   dropdownContent: {
//     display: 'flex',
//     justifyContent: 'space-between', // Spacing between items
//     flexDirection: 'column',
//     backgroundColor: '#fff',
//     minWidth: '160px',
//     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//     zIndex: 1,
//     marginTop: '12px',
//   },
//   menuItem: {
//     padding: '12px 16px',
//     cursor: 'pointer',
//     textAlign: 'center',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     textDecoration: 'none',
//     display: 'block',
//     transition: 'background-color 0.3s ease',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: '30px',
//     borderRadius: '10px',
//     boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
//     transform: 'rotateX(0deg)', // 3D animation
//     transition: 'transform 0.5s ease',
//   },
//   inputGroup: {
//     marginBottom: '15px',
//     width: '100%',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//   },
//   submitButton: {
//     padding: '10px 20px',
//     backgroundColor: '#28a745',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     transform: 'rotateY(0deg)', 
//     transition: 'transform 0.3s ease',
//   },
//   errorText: {
//     color: 'red',
//     fontSize: '12px',
//     marginTop: '5px',
//   },
// };

// export default Login;
import React, { useState } from 'react';

const Login = () => {
  const [activeForm, setActiveForm] = useState('login'); // Manage which form to display
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false); // For showing/hiding password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For sign-up confirm password visibility
  const [errors, setErrors] = useState({});

  // Handle form input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    if (activeForm === 'signUp' && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  // Voice typing using SpeechSynthesis
  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      const formType = activeForm === 'login' ? 'Login' : activeForm === 'signUp' ? 'Sign Up' : 'Reset Password';
      speakText(`${formType} successful!`);
      alert(`${formType} successful!`);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.dropdown}>
        <button style={styles.dropdownButton}>
          {activeForm.charAt(0).toUpperCase() + activeForm.slice(1)}
        </button>
        <div style={styles.dropdownContent}>
          <button style={styles.menuItem} onClick={() => setActiveForm('login')}>
            Login
          </button>
          <button style={styles.menuItem} onClick={() => setActiveForm('signUp')}>
            Sign Up
          </button>
          <button style={styles.menuItem} onClick={() => setActiveForm('resetPassword')}>
            Reset Password
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
          />
          {errors.email && <span style={styles.errorText}>{errors.email}</span>}
        </div>

        <div style={styles.inputGroup}>
          <label>Password:</label>
          <div style={styles.passwordGroup}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              style={styles.input}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={styles.toggleButton}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <span style={styles.errorText}>{errors.password}</span>}
        </div>

        {activeForm === 'signUp' && (
          <div style={styles.inputGroup}>
            <label>Confirm Password:</label>
            <div style={styles.passwordGroup}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                style={styles.input}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={styles.toggleButton}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.confirmPassword && (
              <span style={styles.errorText}>{errors.confirmPassword}</span>
            )}
          </div>
        )}

        <button type="submit" style={styles.submitButton}>
          {activeForm === 'login' && 'Login'}
          {activeForm === 'signUp' && 'Sign Up'}
          {activeForm === 'resetPassword' && 'Reset Password'}
        </button>
      </form>
    </div>
  );
};

// Inline CSS for styling
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    perspective: '1000px', // 3D effect
  },
  dropdown: {
    position: 'relative',
    display: 'inline-block',
    marginBottom: '20px',
  },
  dropdownButton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
  dropdownContent: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    minWidth: '160px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    zIndex: 1,
    marginTop: '12px',
  },
  menuItem: {
    padding: '12px 16px',
    cursor: 'pointer',
    textAlign: 'center',
    backgroundColor: '#007bff',
    color: '#fff',
    transition: 'background-color 0.3s ease',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
  },
  inputGroup: {
    marginBottom: '15px',
    width: '100%',
  },
  passwordGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  toggleButton: {
    marginLeft: '5px',
    padding: '5px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  errorText: {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px',
  },
};

export default Login;
