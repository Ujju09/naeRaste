import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Help: NextPage = () => {
    const helpText = "Do you need help with Maths? Ask here!"
    const encoded = encodeURI(helpText)
    return (
        <div className={styles.container}>
            <Head>
                <title>Stuck 🫣</title>
                <meta name="description" content="Superpowered notebooks" />
            </Head>
            <main className={styles.main}>
            <h1 className={styles.title}>
         naeRaste │ 🤝
        </h1>
            <p  style={{
                padding: '10px',
            }}>
            Just click the photo of the problem you are stuck with and share it with us on WhatsApp.
            
            </p>
            
            <div className={styles.grid}>
                <a href={`https://wa.me/919755992478?text=${encoded}`} className={styles.card}>
                    <h3>
                        Ujjwal &rarr;
                    </h3>
                    <p  style={{
                        color: '#D05E70',
                    }}>
                        Available during evenings.
                    </p>
                </a>
                <a href={`https://wa.me/919755992478?text=${encoded}`} className={styles.card}>
                    <h3>
                        Rakshit &rarr;
                    </h3>
                    <p style={{
                        color: '#D05E70',
                    }}>
                        Available during evenings.
                    </p>                
                 </a>

            </div>

            
            </main>
            
        </div>
    );
}


export default Help;