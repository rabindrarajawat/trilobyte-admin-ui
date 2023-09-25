"use client"
import React,{useState} from 'react';
import styles from './create1.module.css'
import { useRouter } from 'next/navigation';
import MyModal from "../components/showmodal";
import MyModal1 from '../components/investormodal';

import Image from 'next/image';

import myImage1 from '../image/Blue1_png.svg';
import myImage2 from '../image/ic_round-dashboard.png';
import myImage3 from '../image/mdi_create-new-folder.png';
import myImage4 from '../image/Group 191.png';
import myImage5 from '../image/Vector.png';
import myImage6 from '../image/Group.png';
import myImage7 from '../image/Vector1.png';






const create = () => {
  const dvstyle = {
  };

  const router = useRouter();

  
  const [showModal,setShowModal] =useState(false);

  const closeModal =() =>{
    return setShowModal(false)
  }


  return (

    <div className={styles.box}>

<div className={styles.png}>
     <Image src={myImage1} alt="My Image" width={100} height={50} /><br/>
    <button className={styles.logobutton}   onClick={()=>router.push("/dashboard")}>
    <Image src={myImage2} alt="My Image" width={30} height={30} /> Dasboard
    </button>
    <button className={styles.logobutton} onClick={()=>router.push("/create1")}>
    <Image src={myImage3} alt="My Image" width={30} height={30}  /> create
    </button>
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
        <div className={styles.edit}> Create a vault</div>



        <div className={styles.permission} > 
        <Image src={myImage7} alt="My Image" width={11} height={12}/>  Permisson </div>



        <div className={styles.gridContainer}>

          <div className={styles.vault}>Vault Name </div>
          <div className={styles.p1}> Reliable</div>

          <div className={styles.principal}>Principal Amount</div>
          <div className={styles.p2}> 1,200,000 </div>

          <div className={styles.tenure}>Tenure</div>
          <div className={styles.p3}> 12  Months </div> 

          <div className={styles.rate}>Rate</div>
          <div className={styles.p4}>12%</div>

          <div className={styles.assets}>Assets</div>
          <div className={styles.p5}> USDC</div>

          <div className={styles.repayment}>Repayment</div>
          <div className={styles.p6}>Monthly</div>

          <div className={styles.payment}>Payment actors</div>
          <div className={styles.p7}>13  <button className={styles.addbtn} onClick={() => setShowModal(true) }>Add</button>
          {showModal && <MyModal closeModal={closeModal}/>}</div>

          <div className={styles.investor}>Investors</div>
          <div className={styles.p8}> 16  <button className={styles.addbtn} onClick={() => setShowModal(true) }>Add</button>
          {showModal && <MyModal1 closeModal={closeModal}/>}</div>

          <div className={styles.borrower}>Borrower Address</div>
          <div className={styles.p9}>GA5ZSE......4KZVN</div>

          <div className={styles.period}>Period fee</div>
          <div className={styles.p10}>USDC</div>

          <div className={styles.spilt}>Split ratio</div>
          <div className={styles.p11}> 16</div>

          <div className={styles.grace}>Grace period</div>
          <div className={styles.p12}>Monthly</div>



          <button className={styles.mybutton1}>Create</button>

        </div>


      </div>




    </div>

  );
};

export default create;