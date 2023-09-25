"use client"
import React from 'react';
import styles from './page.module.css'
import { useRouter} from 'next/navigation';

import Image from 'next/image';
import myImage1 from '../image/Blue_png.svg';
import myImage2 from '../image/image 29.jpg';

const signin = () => {
  const divStyle = {
  };
const router =useRouter();
  return (
    <div>



      <div className="image-container1">
        <Image src={myImage1} alt="My Image" width={300} height={200} />
      </div>

      <div className="h1">
        <h2>Hi, Welcome back</h2>
      </div>
      <div className="image-container2">
        <Image src={myImage2} alt="My Image" width={900} height={700} />
      </div>


      <div className={styles.box1}>
        <div className={styles.create3}>
          <h2>Sign in to trilobyte  </h2>
        </div>

        <div className={styles.boxsign}>
          <label className={styles.customlabel}>Email Address</label> <br />
          <input type="text" id="Email" required /><br/>

          <label className={styles.customlabel} >Password</label> <br />
          <input type="password" id="Password" required /><br />

        </div>

        <div className={styles.two}>
        <div className={styles.radio}>
            <input type="radio" id="RememberMe" name="rm" />
             <label htmlFor="RememberMe" className={styles.customlabel2}>Remember me</label>

             <a className={styles.one} href="#" target="_blank">fortgot password ?</a>
        </div>


               
            </div>

        <button className={styles.mybutton1}  onClick={()=>router.push("/dashboard")}>Login</button>
       

   
        <div className={styles.signup}>
          <p>Don't have account? <button className={styles.mybutton2}  onClick={()=>router.push("/")}>
          signup</button></p>

        </div>

      </div>


    </div>
  );
};

export default signin;
