import React, { useState } from 'react';
import '../styles/styles.scss';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { auth, db, storage } from '../Firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
        
        },
        (error) => {
          console.error(error);
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: name,
              photoURL: downloadURL,
            });

            const userData = {
              uid: user.uid,
              name,
              email,
              photoURL: downloadURL,
            };

            await setDoc(doc(db, 'users', user.uid), userData);
            await setDoc(doc(db, 'userChats', user.uid), {});

            navigate('/');
          });
        }
      );
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <div className="formcontainer">
      <div className="formwrapper">
        <span className="logo">Chat with Martin</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" style={{ display: 'none' }} />
          <label htmlFor="file">
            <i className="ri-image-add-fill"></i> Add profile
          </label>
          <button>Sign Up</button>
          {error && <span>Something went wrong. Please try again.</span>}
        </form>
        <p>
          You already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
