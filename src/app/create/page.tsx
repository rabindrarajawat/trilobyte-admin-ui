"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter} from 'next/navigation';
import styles from "./create.module.css"


import Image from 'next/image';
import myImage1 from '../image/Blue_png.svg';
import myImage2 from '../image/image 29.jpg';


const create = () => {
  const divStyle = {
  };
   const Router = useRouter();




  return (
    <div>



      <div className={styles.imagecontainer1}>
        <Image src={myImage1} alt="My Image" width={300} height={200} />
      </div>

      <div className={styles.h1}>
        <h2>Hi, Welcome back</h2>
      </div>
      <div className={styles.imagecontainer2}>
        <Image src={myImage2} alt="My Image" width={900} height={700} />
      </div>


      <div className={styles.box}>
        <div className="create1">
          <h2>Create Account  </h2>
        </div>
        <div className={styles.create2}><h2> on trilobyte</h2></div>

        <div className={styles.box2}>
        <div className={styles.name}>
                <div className={styles.fn}>
                    <label>First Name</label> <br />
                    <input type="text" id="First Name" required />
                </div>
                <div className={styles.ln}>
                    <label>Last Name</label><br />
                    <input type="text" id="Last Name" required />
                </div>
            </div>

          <label className={styles.customlabel}>Enter OTP</label> <br />
          <input type="text" id="Enter OTP" required /><br />

          <label className={styles.customlabel}>Password</label> <br />
          <input type="password" id="Password" required /><br />

          <label className={styles.customlabel}>Confirm Password</label><br />
          <input type="password" id="password" required /><br />
        </div>

        <div className={styles.radio}>
  <input type="radio" id="borrower" name="who"  className={styles.radiobutton1} />
  <label htmlFor="borrower" className={styles.radiolabel}>You are Borrower</label>

  <input type="radio" id="investor" name="who"  className={styles.radiobutton2} />
  <label htmlFor="investor" className={styles.radiolabel}>You are an Investor</label> <br />

  <input type="radio" id="paymentActor" name="who" className={styles.radiobutton3} />
  <label htmlFor="paymentActor" className={styles.radiolabel}>You are Payment Actor</label>
</div>


<button className={styles.mybutton1} onClick={()=>Router.push("/dashboard")}>Create</button>

        <div className={styles.signin}>
          <p>You have account? <button className={styles.mybutton2}  onClick={()=>Router.push("/signin")}>
          signin</button></p>

        </div>

      </div>


    </div>
  );
};

export default create;
