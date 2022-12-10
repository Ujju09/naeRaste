import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
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
<meta property="og:image" content="https://drive.google.com/file/d/1Rcn2w-LnchZdLUJR66ZXF04K3-1Da-_D/view?usp=share_link"/>
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
            Designed for Action ⎯⎯
          </h2>
          <p>
          Every piece of information is put carefully. They are there to inform and inspire you about science and technology tools that you could use to improve, manage, test and share your learning.
          </p>
          <Image src={`/dfaction.png`} width={369} height={218} alt="Designed for Action" />

        </div>
        <div className={styles.card}>
          <h2>
            Gets better after scan ⎯⎯
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
        <div className={styles.card}>
          <h2>
            College Waale Yaha Dekhe ⎯⎯
          </h2>
          <p>
            When you use our notebooks to study. We make sure that you can access those notes later on by digitising them for you. This will help you save time and effort when preparing for competitive exams. 
          </p>
          <Link href={'/for-college'}>
          <button className={styles.button_outlined}>
            Learn more
          </button>
          </Link>
          
        </div>
        </div>
      </main>
     
     <Footer />
    </div>
  )
}

export default Home


