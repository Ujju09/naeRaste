import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import AwesomeLine from '../components/awesome_lines'



export default function ForCollege(){
    return(
        <div className={styles.container}>
            <Head>
            <title>nae raste</title>
        <meta name="description" content="Your Aspirational Notebooks" />
<meta name="robots" content="index, follow"/>
<meta name="author" content="Naeraste"/>
<meta name="copyright" content="Naeraste.com"/>
<meta name="language" content="en-US"/>
<meta name="revisit-after" content="7 days"/>
<meta name="geo.region" content="US"/>
<meta name="geo.placename" content="Ranchi, Jharkhand"/>
<meta name="rating" content="general"/>
<meta name="distribution" content="global"/>
<meta name="generator" content="Naeraste"/>
<meta name="classification" content="education, technology"/>
<meta name="coverage" content="Worldwide"/>
<meta name="resource-type" content="document"/>
<meta name="copyright" content="Naeraste"/>
<meta name="dc.language" content="en-US"/>
<meta name="dc.rights" content="Naeraste"/>
<meta name="dc.publisher" content="Naeraste"/>
<meta name="dc.identifier" content="https://naeraste.com"/>
<meta name="dc.relation" content="https://naeraste.com"/>
<meta name="dc.format" content="text/html"/>
<meta name="dc.coverage" content="Worldwide"/>
<meta name="dc.contributor" content="Naeraste"/>
<meta name="dc.creator" content="Naeraste"/>
<meta name="dc.type" content="text/html"></meta>
<meta property="og:image" content="https://drive.google.com/file/d/1UbjAAOrUmm4xkH_sVuVb9sDrq6HSrSlj/view?usp=share_link"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:type" content="image/png"/>
<meta property="og:image:alt" content="Naeraste logo"></meta>

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
            </Head>
            <main className={styles.main}>
                <NavBar />
                <div className={styles.firstcontact}>
        <h1>
          <AwesomeLine/> Your Aspirational Notebooks <AwesomeLine/>
        </h1>
        <p>
            Your most valuable asset is your notes. We help you save it so that you can better prepare for your future.
        </p>
        <Image src="/3factors.webp" alt="image of 3 colorful things representing environment, exposure and intention" width={314} height={275} />
        </div>
       
        <div className={styles.card}>
            <h2>
                Explore new possibilities
            </h2>
            <p>
            With your notes by your side. You can aim higher than everyone else. You will be better prepared for exams like UGC-NET, CSIR-NET, PG-TET, JPSC, UPSC, JAM, GATE, CA, CS, RBI, Judiciary among others.
            </p>

        </div>

        <div className={styles.card}>
            <h2>
                Software Assisted Learning
            </h2>
            <p>
                You can learn and retain more information by using some help from technologies specifically designed to assist your learning. We will help you learn and use them. It will help you beyond your wildest expectations.
            </p>
        </div>
        <div className={styles.card}>
            <h2>
                Good things happen in the long term.
            </h2>
            <p>
                We encourage you to save notes because all good things happens when you take a long term view of its usefullness.
            </p>
        </div>

        <div className={styles.card}>
            <h2>
                Your Next Semester
            </h2>
            <p>
                Your Next Semester take a new path to learn. Take a new path to grow. Next Semester start writing your <em>nae raste</em>.
            </p>
        </div>

        <div className={styles.card}>
            <h2>
                Connect with us
            </h2>
            <p>
                If you are a student and you believe that we can help you. 
                <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSeaBiTAyEpZMZ_xISko0-_YiA6yr12x3ArOI_FprYPoGlFhDA/viewform?usp=sf_link'}>
                   Fill Out this form now.
                </Link>
            </p>
        </div>

        


            </main>
                <Footer />
        </div>
    );
}