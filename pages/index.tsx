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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DGC187B0GF" id='1'></Script>
<Script id='2'>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DGC187B0GF')`};
</Script>
<Script id= '3'>
  {`!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="gFklmXO7nuqnCkSMFvuYhJNcoFn4DSMb";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("gFklmXO7nuqnCkSMFvuYhJNcoFn4DSMb");
  analytics.page();
  }}();`}

</Script>
      <Head>
        <title>nae raste</title>
        <meta name="description" content="Superpowered notebooks" />
        <meta name="keywords" content="learning resources, education, technology, students, learning, better grades, academic success"/>
<meta name="description" content="Naeraste curates the best learning resources and technology to help students achieve academic success and improve their grades."/>
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
<meta name="dc.title" content="Naeraste: The Best Learning Resources and Technology for Students"/>
<meta name="dc.subject" content="education, technology, learning resources, students"/>
<meta name="dc.description" content="Naeraste curates the best learning resources and technology to help students achieve academic success and improve their grades."/>
<meta name="dc.identifier" content="https://naeraste.com"/>
<meta name="dc.relation" content="https://naeraste.com"/>
<meta name="dc.format" content="text/html"/>
<meta name="dc.coverage" content="Worldwide"/>
<meta name="dc.contributor" content="Naeraste"/>
<meta name="dc.creator" content="Naeraste"/>
<meta name="dc.type" content="text/html"></meta>

<meta name="twitter:card" content="summary"/>
<meta name="twitter:title" content="Naeraste - Curated Learning Resources and Technology"/>
<meta name="twitter:description" content="Stay on the cutting edge of education and technology with Naeraste. We curate the best learning resources and technology from around the world."></meta>
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
        <Image src="/bg.png" alt="image of random colorful things" width={493} height={419} />
        
        
       
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
      <footer className={styles.footer}>
        <div className={styles.footerdiv}>
          <ul>
            <li>
              <a href="https://twitter.com/naeraste">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 417" className="handle"><path d="M459.37 104.22c.32 4.54.32 9.1.32 13.64 0 138.72-105.58 298.56-298.55 298.56-59.45 0-114.68-17.22-161.14-47.1 8.45.97 16.57 1.3 25.34 1.3 49.05 0 94.21-16.58 130.27-44.84A105.12 105.12 0 0 1 57.51 253a132.7 132.7 0 0 0 19.81 1.62c9.42 0 18.84-1.3 27.61-3.57A104.95 104.95 0 0 1 20.8 148.07v-1.3a105.68 105.68 0 0 0 47.43 13.32A104.86 104.86 0 0 1 21.44 72.7c0-19.49 5.2-37.36 14.3-52.95a298.27 298.27 0 0 0 216.36 109.8c-1.62-7.8-2.6-15.91-2.6-24.03C249.5 47.69 296.28.58 354.44.58c30.2 0 57.5 12.67 76.67 33.14a206.6 206.6 0 0 0 66.6-25.34 104.65 104.65 0 0 1-46.14 57.83c21.12-2.28 41.59-8.13 60.43-16.25a225.57 225.57 0 0 1-52.63 54.26z"></path></svg>
              </a>

            </li>
            <li>
              ©{new Date().getFullYear()} nae raste 
            </li>
            <li>
            <a href="https://m.youtube.com/channel/UCGypumUZB0u4Q7Rno87DpZw/featured">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" className="handle"><path d="M15.6 2c.4 1.4.4 4.4.4 4.4s0 3-.4 4.4c-.2.8-.8 1.4-1.5 1.6-1.4.4-6.1.4-6.1.4s-4.7 0-6-.4c-.8-.2-1.4-.8-1.6-1.6C0 9.4 0 6.4 0 6.4S0 3.4.4 2C.6 1.2 1.2.6 1.9.4 3.3 0 8 0 8 0s4.7 0 6 .4c.8.2 1.4.8 1.6 1.6zM6.4 9.2l4.8-2.8-4.8-2.8v5.6z"></path></svg>
              </a>
            </li>
            
          </ul>
        </div>
      </footer>
     
    </div>
  )
}

export default Home


