"use client"
import react from 'react'
import styles from './edit.module.css'
import { useRouter } from 'next/navigation';

import Image from 'next/image';

import myImage1 from '../image/Blue1_png.svg';
import myImage2 from '../image/ic_round-dashboard.png';
import myImage3 from '../image/mdi_create-new-folder.png';
import myImage4 from '../image/Group 191.png';
import myImage5 from '../image/Vector.png';
import myImage6 from '../image/Group.png';
import myImage8 from '../image/image 2 (1).png';






const detail = () => {
  const dvstyle = {
  };

  const router = useRouter();

  return (

    <div className={styles.box}>

      <div className={styles.png}>
        <Image src={myImage1} alt="My Image" width={100} height={50} /><br />
        <div className={styles.logobutton} >
          <div className={styles.buttoncontent}>
            <Image src={myImage2} alt="My Image" width={30} height={30} />
            <div className={styles.das}>Dashboard</div>
          </div>
        </div>
        <div className={styles.logobutton}>
          <div className={styles.buttoncontent}>
            <Image src={myImage3} alt="My Image" width={30} height={30} />
            <div className={styles.das}>Create</div>
          </div>
        </div>
      </div>


      <div className={styles.vertical}></div>

      <div className={styles.setting}>
        <button className={styles.stngbtn1} />
        <Image src={myImage4} alt="My Image" width={30} height={30} />
        <button className={styles.stngbtn2} />
        <Image src={myImage5} alt="My Image" width={30} height={30} />
        <button className={styles.stngbtn3} />
        <Image src={myImage6} alt="My Image" width={30} height={30} />
      </div>

      <div className={styles.topnav}>
        <div className={styles.searchcontainer}>
          <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search" />
          </form>
        </div>
      </div>

     <div className={styles.container}> 
        <div className={styles.edit}> Edit the vault</div>
     
     </div>



    </div>
  
  );
};

export default detail;