/** @format */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Script from "next/script";

export default function BooksForYou({ records }) {
  return (
    <div className={styles.container}>
      <Script src="https://js.withorbit.com/orbit-web-component.js" />
      <Head>
        <title>🙀 Books For You</title>
        <meta name="description" content="Handpicked from the library" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Books For You</h1>
        <p>Obviously they don&apos;t teach you this at school.</p>
        <div className={styles.gridcal}>
          {records.map((record, index) => (
            <a
              href={record.fields["buylink"]}
              style={{
                textDecoration: "none",
              }}
              key={index}
            >
              <Image
                src={record.fields["Url"]}
                alt={record.fields["Title"]}
                width={200}
                height={300}
              />
              <h3
                style={{
                  textOverflow: "ellipsis",
                }}
              >
                {record.fields["Title"]}
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "grey",
                  textOverflow: "ellipsis",
                }}
              >
                {record.fields["Author"]}
              </p>
            </a>
          ))}
        </div>
        <orbit-reviewarea
          color="blue"
          style={{
            width: "100%",
            padding: "1rem",
          }}
        >
          <orbit-prompt
            question="What's the working name for Andy's experimental mnemonic medium platform?"
            answer="Orbit"
          ></orbit-prompt>
          <orbit-prompt
            question="What kind of quantum gate is this?"
            question-attachments="https://docs.withorbit.com/toffoli.png"
            answer="A Toffoli gate."
          ></orbit-prompt>
          <orbit-prompt
            question="Given a right triangle with legs of length $a$ and $b$, what is the length of hypotenuse $c$?"
            answer="$$c = \sqrt{a^2 + b^2}$$"
          ></orbit-prompt>
        </orbit-reviewarea>
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
