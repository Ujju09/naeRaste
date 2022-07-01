/** @format */

import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";

export default function Resource({ records }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{records.fields["Chapter Name"]}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>naeRaste │ ✍️</h1>
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            marginTop: "1rem",
            textAlign: "center",
            color: "#D05E70",
          }}
        >
          {records.fields["Chapter Name"]}
        </p>

        <div className={styles.grid}>
          {records.fields.hasOwnProperty("Url") === false ? (
            <>
              Nothing here yet!
              <Image
                src="/silence.png"
                alt="No image"
                width={200}
                height={200}
              />
            </>
          ) : (
            <>
              {records.fields["Url"].split(";").map((url, index) => (
                <iframe
                  key={index}
                  src={url}
                  title={url}
                  width="100%"
                  height="200"
                  frameBorder="10"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.iframe}
                ></iframe>
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(
    `https://api.airtable.com/v0/appL3eEYotbT6ZB0m/Links%20and%20description/${id}`,
    {
      headers: { Authorization: "Bearer key9RtFoRjkES73c1" },
    }
  );

  const records = await res.json();

  return {
    props: { records: records }, // will be passed to the page component as props
  };
}
