import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>naeRaste</title>
        <meta name="description" content="Superpowered notebooks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         naeRaste
        </h1>

        <p className={styles.description}>
          Class 9/Maths</p>
        <div className={styles.grid}>
          <Link href= "/resources" >
            <a className={styles.card}>
            <Image src="/learn.svg" alt="Next.js" width={200} height={200} />

            <h3 style={{
              color:'#5967E5'
            }}>Get better at Maths &rarr;</h3>
            </a>
          </Link>
          <Link href="/gethelp" className={styles.card}>
            <a className={styles.card}>
            <Image src="/support.svg" alt="Next.js" width={200} height={200} />
            <h3  style={{
              color: '#D05E70',
            }}>Stuck ? Ask here &rarr;</h3>
            </a>
          </Link>
          <Link href="/bebetter" >
            <a className={styles.card}>
            <Image src="/blog.svg" alt="Next.js" width={200} height={200} />
            <h3 style={{
              color: 'green',
            }}>Be better blog &rarr;</h3>
            </a>
          </Link>
          <Link href="/exams" >
            <a className={styles.card}>
            <Image src="/exams.svg" alt="Exmas" width={200} height={200} />
            <h3 style={{
              color: 'purple',
            }}>What we all hate &rarr;</h3>
            </a>
          </Link>
          
        </div>
      </main>

      <footer className={styles.footer}>
        
          <span className={styles.logo}>
            <Image src="/art.svg" alt="Vercel Logo" width={60} height={60} />
          </span>
      </footer>
    </div>
  )
}

export default Home
