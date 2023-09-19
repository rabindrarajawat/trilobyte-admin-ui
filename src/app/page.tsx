"use client"
import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import styles from './page.module.css'



import Image from 'next/image';
import myImage1 from './image/Blue_png.svg';
import myImage2 from './image/image 29.jpg';



const HomePage = () => {
  const divStyle = {
  };
  const Router = useRouter();

  return (
    <div className="body">



      <div className="image-container1">
        <Image src={myImage1} alt="My Image" width={300} height={200} />
      </div>

      <div className="h1">
        <h2>Hi, Welcome back</h2>
      </div>
      <div className="image-container2">
        <Image src={myImage2} alt="My Image" width={900} height={700} />
      </div>


      <div className="box">
        <div className="create1">
          <h2>Create Account  </h2>
        </div>
        <div className="create2"><h2> on trilobyte</h2></div>

        <div className="box2">
          <label className="custom-label">Email Address</label> <br />
          <input type="text" id="Email" required /><br />

          <label className="custom-label">Enter OTP</label> <br />
          <input type="text" id="Enter OTP" required /><br />

          <label className="custom-label">Password</label> <br />
          <input type="password" id="Password" required /><br />

          <label className="custom-label">Confirm Password</label><br />
          <input type="password" id="password" required /><br />
        </div>

           <button className="my-button1" onClick={()=>Router.push("/create")} >Create</button>
       
          
   
        <div className="signin">
          <p>You have account? <button className="my-button2"  onClick={()=>Router.push("/signin")}  >
          signin</button></p>

        </div>

      </div>


    </div>
  );
};

export default HomePage;
