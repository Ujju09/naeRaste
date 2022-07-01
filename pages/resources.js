/** @format */

// import type { NextPage } from 'next'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Resource = ({ records }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>🚀 Resources</title>
        <meta name="description" content="Handpicked from the Internet" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>naeRaste │ ✍️</h1>
        <p>Video resources from around the 🌏</p>
        <div className={styles.grid}>
          {records.map((record, index) => (
            <Link
              key={index}
              href={{
                pathname: "/res/[id]",
                query: {
                  id: record.id,
                },
              }}
            >
              <div className={styles.card}>
                {record.fields["Chapter Name"]} &rarr;
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

//Get server props is dope!!

export async function getStaticProps() {
  const res = await fetch(
    "https://api.airtable.com/v0/appL3eEYotbT6ZB0m/Links%20and%20description?maxRecords=15&view=Grid%20view",
    {
      headers: { Authorization: "Bearer key9RtFoRjkES73c1" },
    }
  );

  const records = await res.json();

  return {
    props: { records: records.records }, // will be passed to the page component as props
  };
}

export default Resource;
