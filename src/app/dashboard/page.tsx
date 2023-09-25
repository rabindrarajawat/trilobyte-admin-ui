"use client"
import React from 'react';
import Link from 'next/link';
import styles from  './dashboard.module.css';
import { useRouter} from 'next/navigation';


import Image from 'next/image';
import myImage1 from '../image/Blue1_png.svg';
import myImage2 from '../image/ic_round-dashboard.png';
import myImage3 from '../image/mdi_create-new-folder.png';
import myImage4 from '../image/Group 191.png';
import myImage5 from '../image/Vector.png';
import myImage6 from '../image/Group.png';
import myImage7 from '../image/GA5ZSE......4KZVN.png';
import myImage8 from '../image/image 2 (1).png';
import myImage9 from '../image/image 20.png';
import myImage10 from '../image/image 23.png';
import myImage11 from '../image/image 22.png';


const dashboard = () => {
  const divStyle = {

  };
   const router =useRouter();

  return (
    <div className={styles.box}>
     
      
     <div className={styles.png}>
     <Image src={myImage1} alt="My Image" width={100} height={50} /><br/>
    <button className={styles.logobutton}>
    <Image src={myImage2} alt="My Image" width={30} height={30} /> Dasboard
    </button>
    <button className={styles.logobutton} onClick={()=>router.push("/create1")}>
    <Image src={myImage3} alt="My Image" width={30} height={30}  /> create
    </button>
  </div>


  <div className={styles.vertical}>
  </div>

  <div className= {styles.setting}>
    <button className={styles.stngbtn1}/>
    <Image src={myImage4} alt="My Image" width={30} height={30} />
      <button className={styles.stngbtn2} />
      <Image src={myImage5} alt="My Image" width={30} height={30} />
      <button className={styles.stngbtn3} />
      <Image src={myImage6} alt="My Image" width={30} height={30} />

        <button className={styles.stngbtn4} />
        <Image src={myImage7} alt="My Image" width={120} height={20} />

  </div>


  <div className={styles.topnav}>
    <div className={styles.searchcontainer}>
      <form action="/action_page.php">
        <input type="text" placeholder="Search.." name="search"/>
      </form>
    </div>
  </div>



  <div className={styles.container}>

    <div className={styles.box1}> Total Investor's
      <div className={styles.num}>676</div>
    </div>
    <div className={styles.box2}> Active Vault's
      <div className={styles.num}>12</div>
    </div>
    <div className={styles.box3}> Loans Orignated
      <div className={styles.num}>12000000</div>
    </div>
  </div>
  <div className={styles.myvault}>My Vault's</div>
  <div>
    <button className={styles.mybutton1}>Active</button>
    <button className={styles.mybutton2}>closed</button>

  </div>


  <div className={styles.names}>
    <h3>Name</h3>
    <h3>Principal amount</h3>
    <h3>Assests</h3>
    <h3>APR</h3>
    <h3>Next payment date</h3>
    <h3>Status</h3>
    <h3>Details</h3>
  </div>

  <div className={styles.vault1}>
 <div className={styles.siroxmen}>
  <div className={styles.logo}> 
 <Image src={myImage8} alt="My Image" width={50} height={50} /><h2>Siroexmen</h2></div>
   
   <h3>134,566.00</h3>
   <h3>USDC</h3>
   <h3>12%</h3>
   <h3>72 days </h3>
   <h3>Default</h3>
   <button className={styles.defaultbtn} > <h3  onClick={()=>router.push("/detail")}>Details</h3></button>
  </div>
   </div>

   <div className={styles.vault2}>
  <div className={styles.Wintermute}>
    <div className={styles.logo}>   
  <Image src={myImage9} alt="My Image" width={50} height={50} /><h2>wintermute</h2></div>
     
     <h3>100,656.10</h3>
     <h3>USDC</h3>
     <h3>9%</h3>
     <h3>84 Days </h3>
     <h3>Lending</h3>
     <button className={styles.defaultbtn} > <h3  onClick={()=>router.push("/winterdetail")}>Details</h3></button>
    </div>
  </div>

  <div className={styles.vault3}>
    <div className={styles.ZinZin}>
      <div className={styles.logo}> 
   <Image src={myImage10} alt="My Image" width={50} height={50} /> <h2>ZinZin</h2></div>
       
       <h3>100,656.10</h3>
       <h3>USDC</h3>
       <h3>9%</h3>
       <h3>84 Days </h3>
       <h3>Lending</h3>
       <button className={styles.defaultbtn} > <h3  onClick={()=>router.push("#")}>Details</h3></button>
      </div>
    </div>

    <div className={styles.vault4}>
      <div className={styles.Irakus}>
        <div className={styles.logo}>   <Image src={myImage11} alt="My Image" width={50} height={50} /><h2>Irakus capital</h2></div>
         
         <h3>100,656.10</h3>
         <h3>USDC</h3>
         <h3>9%</h3>
         <h3>84 Days </h3>
         <h3>Lending</h3>
         <button className={styles.defaultbtn} > <h3  onClick={()=>router.push("#")}>Details</h3></button>
        </div>
      </div>


    </div>
  );
};

export default dashboard;
