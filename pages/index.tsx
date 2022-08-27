import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'
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
        <h1 className={styles.title}>
         nae raste │ नए रास्ते
        
        </h1>
        <div style={{
          padding: '1rem',
        }}>
          <Image src="/banner.png" alt="notebook" width={780} height={299} />
        </div>
        <div style={{
          padding: '1rem',
          fontSize: '1.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
          <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            // alignItems: 'center',
            flexDirection: 'row',
            gap: '1rem',
          }}
          >
            <Image src="/NLM1.png" alt="notebook" width={200} height={250} />
            <Image src="/NLM2.png" alt="notebook" width={200} height={250} />
           
            <Image src="/Golden ratio.png" alt="notebook" width={200} height={250} />
          </div>
          <p style={{
            textAlign: "center",
          }}>
            Exercise notebooks <br/>
             Affordable, Accessible, Aspirational
          </p>
          <Image src="/arrow-6.svg" alt="notebook" width={150} height={150} />
          Simple product - High impact 
          <p style={{
            textAlign: 'center',
            padding: '1.5rem',
          }}>
            Every notebook is embedded with QR code that will unlock the best learning resources from around the world.<br />
            Which means it doesn&apos;t matter if you live in Delhi or a small town in Bihar. Everyone will be able to access these resources free of cost.
          </p>
          <Link href={`https://begin.naeraste.com/`}>
          <div className={styles.button} >
            Let&apos;s begin
          </div>
          </Link>
         
        </div>
        <div >  
        </div>
        

      </main>


     
      
     
      <Script async data-uid="37bab4a468" src="https://artisanal-producer-6695.ck.page/37bab4a468/index.js"></Script>
      <footer className={styles.footer}>
        <a href={`https://research.naeraste.com/`} style={{
          textDecoration: "none",
          color:"black"
        }}>
        <div className={styles.card}>
            Want to participate in research aimed to help you learn better?
            <button className={styles.secondaryButton}>
            →
            </button>
          </div>
        </a>
        
        
        <a href={`https://www.youtube.com/channel/UCGypumUZB0u4Q7Rno87DpZw`} style={{
          textDecoration: "none",
          color:"black"
        }}>
        <div className={styles.card}>
            Go to our YouTube channel. We publish videos on learning and problem solving.
            <button className={styles.secondaryButton}>
            →
            </button>
          </div>
        </a>
          
      </footer>
     
    </div>
  )
}

export default Home


