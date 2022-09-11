import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'
const Home: NextPage = () => {

  const capabilities = [
    "Curated learning resources for your class",
"Videos",
"Practice tests",
"Memory",
"Peer-2-Peer tutoring",
"Reserach informed learning methods",
"Ask your doubts",
"Book recommendations",
"Assignment management templates",
"Schedule templates",
"Rewards for participation 🎁",
  ];

  
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
        <div className={styles.nav}>
          
          <div className={styles.navdiv}>
          <Image src="/icon-512.png" alt="nae raste" width={75} height={75} />
          <h3>
            nae raste
          </h3> 
          </div>
         
        </div>
        <div className={styles.firstcontact}>

        <h1>
          Your Superpowered Notebook
        </h1>
        <p>
        All your learning needs are bundled together right into your notebook. All you need is just a scan.
        </p>
        <Link href={'https://begin.naeraste.com/'}>
        <button className={styles.button}>
          Get started
        </button>
        </Link>
        
        
       
        <div className={styles.card}>
          <h2>
            Designed for Action
          </h2>
          <p>
          Every piece of informtion is put carefully. They are there to inform and inspire you about science and technology tools that you could use to improve, manage, test and share your learning.
          </p>
          <Image src={`/dfaction.png`} width={369} height={218} alt="Designed for Action" />

        </div>
        <div className={styles.card}>
          <h2>
            Gets better after scan
          </h2>
          <Image src={`/visual-qr-use.png`} width={362} height={206} alt="QR" />
          <p>
          Behind the QR scan lies the true powers of this notebook.
          </p>
          <ul className={styles.ul}>
            {capabilities.map((c, index) => (
              <li key={index} className ={styles.list}>
                <p>
                  {c}
                </p>
              </li>
            ))}

          </ul>
          <p>
            And much more...
          </p>
        </div>
        </div>
        
      </main>
     
    </div>
  )
}

export default Home


