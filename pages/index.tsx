import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Newsletter from '../components/newsletter'
import { useState } from 'react'
const Home: NextPage = () => {

  const grades = [9,10,11,12];
  const [grade, setGrade] = useState(9);
  return (
    <div className={styles.container}>
      <Head>
        <title>naeRaste</title>
        <meta name="description" content="Superpowered notebooks" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         naeRaste │ नए रास्ते
        
        </h1>

        <p className={styles.description}>
          Maths <br/><span>
          <label> Select your class </label>  
            <select style={{
              width: '100px',
              height: '40px',
              borderRadius: '40px',
              border: '1px solid #ccc',
              padding: '5px',
              fontSize: '1.5rem',
              
              color: 'white',
              backgroundColor: "#8EC5FC", 
              backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",

            }} onChange={
              (e) => {
                setGrade(parseInt(e.target.value));
              }

            }
            defaultValue={grade}>
          
              {grades.map(grade => <option key={grade} value={grade}>{grade}</option>)}
            </select>  
          
            </span></p>
        <div className={styles.grid}>
          <Link href= {
            {
              pathname: '/resources',
              query: {
                grade: grade
              }
            }
            
          } >
            <a className={styles.card}>
            <Image src="/learn.svg" alt="Learning resources" width={200} height={200}  priority/>

            <h3 style={{
              color:'#5967E5'
            }}>Get better at Maths &rarr;</h3>
            </a>
          </Link>
          <Link href="/gethelp" className={styles.card}>
            <a className={styles.card}>
            <Image src="/support.svg" alt="Support" width={200} height={200} />
            <h3  style={{
              color: '#D05E70',
            }}>Stuck ? Ask here &rarr;</h3>
            </a>
          </Link>
          <Link href="/bebetter" >
            <a className={styles.card}>
            <Image src="/blog.svg" alt="Blogs" width={200} height={200} />
            <h3 style={{
              color: 'green',
            }}>Be better blog &rarr;</h3>
            </a>
          </Link>
          <Link href="/booksforyou" >
            <a className={styles.card}>
            <Image src="/book.svg" alt="Blogs" width={200} height={200} />
            <h3 style={{
              color: 'orange',
            }}>The missing school &rarr;</h3>
            </a>
          </Link>
          <Link href="/exams" >
            <a className={styles.card}>
            <Image src="/exams.svg" alt="Exams" width={200} height={200}/>
            <h3 style={{
              color: 'purple',
            }}>What we all hate &rarr;</h3>
            </a>
          </Link>
          
        </div>
      </main>

      <Newsletter />
    </div>
  )
}

export default Home
