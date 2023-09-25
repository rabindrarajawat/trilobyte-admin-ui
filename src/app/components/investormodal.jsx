import Image from 'next/image';

import styles from './showmodal.module.css'
import myImage1 from '../image/Vector link .png';
import myImage2 from '../image/Group minus.png';



const MyModal = ({closeModal}) => {
    return (
    <>
    <div className={styles.modalwraper}  onClick={closeModal}   ></div>
    <div className={styles.modalcontainer}>
        <div className={styles.pay}> Add Investors  
         <button className={styles.btn} onClick={closeModal}>X</button></div>

         
  <div className={styles.topnav}>
    <div className={styles.searchcontainer}>
      <form action="/action_page.php">
        <input type="text" placeholder="Search the Investor" name="search"/>
      </form>
    </div>
  </div>

  <div className={styles.actor}> Investors Address</div>
 

   <div className={styles.grid}>
   <div className={styles.one}>6dbff6522576.....96e4 
   <Image className={styles.img} src={myImage1} alt="My Image" width={15} height={15}/>
   <Image className={styles.img1} src={myImage2} alt="My Image" width={15} height={15}/></div>

   <div className={styles.one}>6dbff6522576.....96e4 
   <Image className={styles.img} src={myImage1} alt="My Image" width={15} height={15}/>
   <Image className={styles.img1} src={myImage2} alt="My Image" width={15} height={15}/></div>

   <div className={styles.one}>6dbff6522576.....96e4 
   <Image className={styles.img} src={myImage1} alt="My Image" width={15} height={15}/>
   <Image className={styles.img1} src={myImage2} alt="My Image" width={15} height={15}/></div>

   <div className={styles.one}>6dbff6522576.....96e4 
   <Image className={styles.img} src={myImage1} alt="My Image" width={15} height={15}/>
   <Image className={styles.img1} src={myImage2} alt="My Image" width={15} height={15}/></div>

   <div className={styles.one}>6dbff6522576.....96e4 
   <Image className={styles.img} src={myImage1} alt="My Image" width={15} height={15}/>
   <Image className={styles.img1} src={myImage2} alt="My Image" width={15} height={15}/></div>

   <div className={styles.one}>6dbff6522576.....96e4 
   <Image className={styles.img} src={myImage1} alt="My Image" width={15} height={15}/>
   <Image className={styles.img1} src={myImage2} alt="My Image" width={15} height={15}/></div>
   

    
    
    </div> 



        
    </div>
    </>
    );
};

export default MyModal;