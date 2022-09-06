import Head from "next/head";
import { Heading, Link } from "@chakra-ui/core";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Blue Auto</title>
          <meta name="description" content="Where buyer and seller meets" />
          <link rel="icon" href="/wheel.png" />
        </Head>

        <main className={styles.main}>
          <h2 className={styles.title}>
            Welcome to
            <Link color="teal.500" href="http://localhost:3000/about">
              &nbsp;AutoLink
            </Link>
          </h2>

          <div className={styles.grid}>
            <a onClick={() => router.push("/cars")} className={styles.card}>
              <h2>Buying &rarr;</h2>
              <p>
                Find your new car at the best price - with financing available.
              </p>
            </a>

            <a
              onClick={() => router.push("/uploadcar")}
              className={styles.card}
            >
              <h2>Selling &rarr;</h2>
              <p>
                Sell your car directly to its new owner with the profit in your
                pocket.
              </p>
            </a>

            <a className={styles.card} onClick={() => router.push("/about")}>
              <h2>Financing &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="http://localhost:3000/financing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </div>
  );
}
