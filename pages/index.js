import Head from 'next/head'
import Image from 'next/image'
import style from './Home.module.css'


export default function Home() {
  return (
    <section>
      <div className={style.bgimg}>
        <div className={style.topleft}>
          {/* <Image src='https://imgur.com/jtm7lPA' width={100} height={100} /> */}
        </div>
          <div className={style.middle}>
              <h1>COMING SOON</h1>
              <hr id="hrs" className={style.hr} />
              <p>20 days left</p>
          </div>
        <div className={style.bottomleft}>
          <p>Website is under construction..<br/> Thanks for Visiting</p>
        </div>
</div>
    </section>
  )
}
