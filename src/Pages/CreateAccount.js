import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './CreateAccount.css';

// Upload Image
// import { FaCloudUploadAlt, FaFileImage } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
import Upload from '../Components/Upload';
import { FaCheck } from "react-icons/fa";

function CreateAccount() {
       const [isSubmitted, setSubmitted] = useState(false);
       const [uploadedImage, setUploadedImage] = useState(null);
   
       const handleSubmit = (e) => {
           e.preventDefault();
           setSubmitted(true);
           // You can use the uploadedImage state as needed after submission
           console.log('Uploaded Image:', uploadedImage);
       };
   
       const handleImageUpload = (imageURL) => {
           setUploadedImage(imageURL);
       };

  return (
    <div className='create-account-flex-container'>
       {isSubmitted ? (
        <div className='form-create-account'>
          <h4 className='download-image-user'>Download your profile picture here</h4>
          <div>
              <Upload onImageUpload={handleImageUpload} />
              <button className='bt-finish-create-account'>Finished <FaCheck className='FaCheck ' /></button>
          </div>
        </div>
      ) : (
        <div className='form-create-account'>
            <h4>Don't have an account yet ?</h4>
            <hr className='hr-create-account'/>
            <p className='text-create-account'>Please enter complete information below.</p>
            <form onSubmit={handleSubmit}>
                <input className='input-create-account'
                       type="text"
                       placeholder="Enter full name"/>
                <input className='input-create-account'
                       type="text"
                       placeholder="Enter email"/>
                <input className='input-create-account'
                       type="text"
                       placeholder="Enter day of birth"/>
                <input className='input-create-account'
                       type="text"
                       placeholder="Enter Student_ID"/>
                <input className='input-create-account'
                       type="text"
                       placeholder="Enter phone numbers"/>
                <input className='input-create-account'
                       type="text"
                       placeholder="Enter class"/>
                <input className='input-create-account'
                       type="text"
                       placeholder="Enter Faculty/Institute"/>
            <p className='texts-create-account'>Once you've provided all the necessary information, kindly proceed by clicking the Submit 
            button below.</p>
            <button className='bt-submit-create-account'>Submit</button>
            </form>
        </div>
        )}

        <div className='forms-create-account'>
            <p className='login-create-account'>Do you have an account ? 
            <span><Link className='forgot-password' to='/login'> Login </Link></span></p>
        </div>
    </div>
  );
}

export default CreateAccount;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './CreateAccount.css';
// import Upload from '../Components/Upload';
// import { FaCheck } from "react-icons/fa";

// function CreateAccount() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setSubmitted(true);
//            // You can use the uploadedImage state as needed after submission
//            console.log('Uploaded Image:', uploadedImage);

//     const data = {
//       firstName,
//       lastName,
//       email,
//       password,
//     };

//     try {
//       const response = await fetch('http://localhost:5001/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         // Handle success, e.g., redirect to login page
//         console.log('Account created successfully!');
//       } else {
//         // Handle error, e.g., display an error message
//         console.error('Failed to create account');
//       }
//     } catch (error) {
//       console.error('Error during API call:', error);
//     }
//   };
// // Upload Image
//       const [isSubmitted, setSubmitted] = useState(false);
//       const [uploadedImage, setUploadedImage] = useState(null);

//       const handleImageUpload = (imageURL) => {
//         setUploadedImage(imageURL);
//       };

//   return (
//     <div className='create-account-flex-container'>
//       {isSubmitted ? (
//         <div className='form-create-account'>
//           <h4 className='download-image-user'>Download your profile picture here</h4>
//           <div>
//               <Upload onImageUpload={handleImageUpload} />
//               <button className='bt-finish-create-account'>Finished <FaCheck className='FaCheck ' /></button>
//           </div>
//         </div>
//       ) : (
//       <div className='form-create-account'>
//         <h4>Don't have an account yet ?</h4>
//         <hr className='hr-create-account' />
//         <p className='text-create-account'>Please enter complete information below.</p>
//         <form onSubmit={handleSubmit}>
//           <input
//             className='input-create-account'
//             type="text"
//             placeholder="Enter first name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//           <input
//             className='input-create-account'
//             type="text"
//             placeholder="Enter last name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//           <input
//             className='input-create-account'
//             type="text"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             className='input-create-account'
//             type="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit" className='bt-submit-create-account'>
//             Submit
//           </button>
//         </form>
//       </div>
//       )}

//       <div className='forms-create-account'>
//         <p className='login-create-account'>
//           Do you have an account ?
//           <span>
//             <Link className='forgot-password' to='/login'>
//               Login
//             </Link>
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default CreateAccount;