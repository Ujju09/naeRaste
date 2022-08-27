import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
// import Newsletter from '../components/newsletter'

import Script from 'next/script'
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
          <Image src="/banner.png" alt="notebook" width={428} height={234} />
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
            <Image src="/NLM1.png" alt="notebook" width={150} height={200} />
            <Image src="/NLM2.png" alt="notebook" width={150} height={200} />
           
            <Image src="/Golden ratio.png" alt="notebook" width={150} height={200} />
          </div>
          <p>
            Exercise notebooks.
          </p>
          <Image src="/arrow-6.svg" alt="notebook" width={428} height={234} />
          Simple product - High impact 
        </div>
        <div >
          
          
          
        </div>
      </main>

      {/* <Newsletter /> */}
     
      
     
      <Script async data-uid="37bab4a468" src="https://artisanal-producer-6695.ck.page/37bab4a468/index.js"></Script>
     
    </div>
  )
}

export default Home


{/* <div style={{
          backgroundColor: 'purple',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}>
      
          <Image src="/Frame 4.png" alt="notebook" width={144} height={100} />
        </div> */}