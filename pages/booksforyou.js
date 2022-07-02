/** @format */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function BooksForYou({ records }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>🙀 Books For You</title>
        <meta name="description" content="Handpicked from the library" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Books For You</h1>
        <p>
          These books are curated to bring the best out of you. And obviously
          they don&apos;t teach this at school.
        </p>
        <div className={styles.grid}>
          {records.map((record, index) => (
            <div key={index} className={styles.card}>
              <a
                href={record.fields["buylink"]}
                style={{
                  textDecoration: "none",
                }}
              >
                <Image
                  src={record.fields["Url"]}
                  alt={record.fields["Title"]}
                  width={200}
                  height={300}
                />
                <h3>{record.fields["Title"]}</h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "grey",
                  }}
                >
                  {record.fields["Author"]}
                </p>
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const API_KEY = process.env.API_KEY;
  const TABLE_KEY = process.env.TABLE_KEY;
  const res = await fetch(
    `https://api.airtable.com/v0/${TABLE_KEY}/Books?maxRecords=3&view=Grid%20view`,
    {
      headers: { Authorization: `Bearer ${API_KEY}` },
    }
  );

  const books = await res.json();

  return {
    props: { records: books.records }, // will be passed to the page component as props
  };
}
