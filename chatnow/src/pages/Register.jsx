import React, { useState } from 'react'
import '../styles/styles.scss'
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {auth , db, storage} from '../Firebase';
import { doc, setDoc } from "firebase/firestore"; 
const Register = () => {
  const [err,setErr] = useState(false)
  const handleSubmit =  async  (e)=>{
   e.preventDefault() 
 const name = e.target[0].value;
 const email = e.target[1].value;
 const password = e.target[2].value;
 const file = e.target[3].files[0];
 
try{
  const res =  await createUserWithEmailAndPassword(auth, email, password)
const storageRef = ref(storage, name);

const uploadTask = uploadBytesResumable(storageRef, file); 
uploadTask.on( 
  (error) => {
setErr(true);
  }, 
  () => {
    
    getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
await updateProfile(res.user,{
  name,
  photoURL:downloadURL,
});
await setDoc(doc(db,'users', res.user.uid),{
  uid:res.user.uid,
  name,
  email,
  photoURL: downloadURL
})
    });
   
  }

);


}
catch(err){
setErr(true)
}



  };
  return (
    <div className='formcontainer'>
<div className='formwrapper'>
    <span className='logo'>Chat with Martin</span>
    <span className='title'>Register</span>
    <form onSubmit={handleSubmit}> 
        <input type='text' placeholder='name'/>
        <input type='email' placeholder='email'/>
        <input type='password' placeholder='password'/>
        <input type='file' id='file'
        style={{display:'none'}}/>
        <label htmlFor='file'>
        <i class="ri-image-add-fill"></i>
          Add profile
        </label>
        <button> Sign Up</button>
        {err && <span>Something went wrong.Please try again</span>}
    </form>
    <p>You do have an account ? Login </p>
</div>
    </div>
  )
}

export default Register