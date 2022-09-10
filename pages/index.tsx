import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'
const Home: NextPage = () => {

  
  return (
    <div className={styles.container}>
      <Head>
        <title>nae raste</title>
        <meta name="description" content="Superpowered notebooks" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
      </Head>

      <main className={styles.main}>
      <Script async data-uid="963f67a16a" src="https://artisanal-producer-6695.ck.page/963f67a16a/index.js"></Script>

        <div className={styles.row}>
          <h1>
            Empowering You
          </h1>
          <div className={styles.col}>
            <div className={styles.subheader}>
              <Image src="/icon-192.png" width={75} height={50} alt="1" />
              <h2>nae raste</h2>
            </div>
          <div className={styles.line}>

</div>
            <p>
            We are on a mission to empower students by matching them with great learning resources and technology.
            </p>
            <Link href={`https://begin.naeraste.com/`}>
          <div className={styles.button} >
            Let&apos;s begin
          </div>
          </Link>
            <div className={styles.line}>

            </div>
          </div>
        </div>
       
        
       

      </main>


     
      
     
      <footer className={styles.footer}>    
      </footer>
     
    </div>
  )
}

export default Home


