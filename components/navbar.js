import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function  NavBar(){

    return (
        <div className={styles.nav}>
          
          <div className={styles.navdiv}>
          <Image src="/icon-512.png" alt="nae raste" width={75} height={75} />
          <h3>
            nae raste
          </h3> 
          </div>
         
        </div>
    );

}