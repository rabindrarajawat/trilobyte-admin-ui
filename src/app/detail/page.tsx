"use client"
import react from 'react'
import styles from './detail.module.css'
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


      <div className={styles.vertical}>
      </div>

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

      <button className={styles.backbutton} onClick={() => router.push("/dashboard")} ></button>
      <div className={styles.overview}> <b>Overview</b></div>

      <div className={styles.container1}>
        <div className={styles.leftsection}>
          <div className={styles.logo1}>
            <Image src={myImage8} alt="My Image" width={50} height={50} /></div>
          <div>
            <h1>Siroexmen</h1>
          </div>

          <button className={styles.mybutton1} onClick={() => router.push("/detailedit")}>Edit</button>
        </div>
        <div className={styles.one}>
          <h2>About Siroexmon</h2>
          <h4>Established in 2018 by a team of trading experts, Siroexmon provides consistently deep liquidity to every
            major crypto exchange using its proprietary trading algorithms.</h4>
          <h3>Vault Details</h3>
        </div>
        <div className={styles.two}>
          <div className={styles.status}> status <button className={styles.default}> Default</button>    </div>
        </div>
        <div className={styles.next}>
          Payment Actors <div className={styles.p1}> 16 Actor</div>

        </div>

        <div className={styles.three}>
          <div className={styles.status}> Vault Asset  <div className={styles.s1}>USDC</div>
          </div>
        </div>
        <div className={styles.next}>
          Total Principal Outstanding <div className={styles.p2}> 90,656.10 USDC</div>

        </div>

        <div className={styles.four}>
          <div className={styles.status}> Principal  <div className={styles.s2}> 390,656.10  USDC</div>
          </div>
        </div>
        <div className={styles.next}> APR <div className={styles.p3}> 12%</div>
        </div>

        <div className={styles.five}>
          <div className={styles.status}> EMI Cash Pool   <div className={styles.s3}> 10,000 USDC</div></div>
        </div>
        <div className={styles.next}>Lending Pool <div className={styles.p4}> 0 USDC</div>
        </div>

        <div className={styles.six}>
          <div className={styles.status}> Cash Pool   <div className={styles.s2}> 807,000.00 USDC</div> </div>
        </div>
        <div className={styles.next}> Issuing Date <div className={styles.p5}> May 22, 2022</div>
        </div>

        <div className={styles.seven}>
          <div className={styles.status}> Maturity  <div className={styles.s3}> Jun 6, 2023</div>  </div>
        </div>
        <div className={styles.next}> Payment Frequency <div className={styles.p6}> 30 Days</div>
        </div>

        <div className={styles.eight}>
          <div className={styles.status}> Grace Period  <div className={styles.s4}> 60 Days</div>  </div>
        </div>
        <div className={styles.next}> Next Payment Detail <div className={styles.p7}>00:00 GMT 10/03/2023</div>
        </div>





      </div>


      <div className={styles.container2}>
        <div className={styles.investor}>
          <h2> Investor</h2>
        </div>
        <div className={styles.investoraddress}> Investor Address</div>
        <div className={styles.approval}>Approval</div>

        <div className={styles.wordgrid}>

          <div className={styles.word}>GA898.............7Y67 ,</div>
          <div className={styles.accepted}>Accepted</div>

          <div className={styles.word}>GA898.............7Y67 ,</div>
          <div className={styles.accepted}>Accepted</div>

          <div className={styles.word}>GA898.............7Y67 ,</div>
          <div className={styles.accepted}>Accepted</div>

          <div className={styles.word}>GA898.............7Y67 ,</div>
          <div className={styles.accepted}>Accepted</div>

          <div className={styles.word}>GA898.............7Y67 ,</div>
          <div className={styles.action}>NO Action</div>

          <div className={styles.word}>GA898.............7Y67 ,</div>
          <div className={styles.action}>NO Action</div>

          <div className={styles.word}>GA898.............7Y67 ,</div>
          <div className={styles.action}>NO Action</div>

          <div className={styles.word}>GA898.............7Y67 ,</div>
          <div className={styles.action}>NO Action</div>


        </div>

      </div>


      <div className={styles.container3}>
        <div className={styles.investor}><h2>Payment Actor</h2> </div>

        <div className={styles.paymentactor}> Payment Actor</div>
        <div className={styles.approval1}>Approval</div>

        <div className={styles.wordgrid}>
          <div className={styles.word}>GA898.............7Y67 ,</div>
          <div className={styles.accepted}>Accepted</div>

          <div className={styles.word}>GA898.............7Y67 ,</div>
          <div className={styles.accepted}>Accepted</div>

          <div className={styles.word}>GA898.............7Y67 ,</div>
          <div className={styles.accepted}>Accepted</div>

          <div className={styles.word}>GA898.............7Y67 ,</div>
          <div className={styles.action}>NO Action</div>

          <div className={styles.word}>GA898.............7Y67 ,</div>
          <div className={styles.action}>NO Action</div>

          <div className={styles.word}>GA898.............7Y67 ,</div>
          <div className={styles.action}>NO Action</div>

        </div>

      </div>

    </div>

  );
};

export default detail;