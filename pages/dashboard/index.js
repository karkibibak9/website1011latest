import styles from './index.module.css'

const Dashboard = () => {
    return ( 
        <section>
           <div className={styles.sidebar}>
              <a>Order</a>
              <a>Menu</a>
           </div>
           
            {/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> */}

{/* <div id={styles.mysidebar} className={styles.sidebar}>
  <a href="#"><i className={styles.materialicon}>info</i><a className={styles.icontext}>about</a></a><br/>
  <a href="#"><i className={styles.materialicon}>spa</i><a className={styles.icontext}>services</a>
  </a><br/>
  <a href="#"><i className={styles.materialicon}>monetization_on</i><a className={styles.icontext}>clients</a></a><br/>
  <a href="#"><i className={styles.materialicon}>email</i><a className={styles.icontext}>contact</a></a>
</div>

<div id="main">
  <h2>A simple sidebar.</h2>
  <p>The sidebar is in fixed position and does not close.</p>
</div> */}
        </section>
     );
}
 
export default Dashboard;