import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import CreateGroup from "../components/CreateGroup";
import MyGroup from "../components/MyGroup";
import AllGroup from "../components/AllGroup";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>swaym_sahayta_samuh By Naushad</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <div className={styles.navigation}>
          <h1
            style={{
              marginLeft: "10px",
              color: "black",
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            S
            <sup
              style={{
                verticalAlign: "super",
                fontSize: "smaller",
              }}
            >
              S
              <sup
                style={{
                  verticalAlign: "super",
                  fontSize: "smaller",
                }}
              >
                s
              </sup>
            </sup>
          </h1>
          <div className={styles.wallet}>
            <ConnectButton />
          </div>
        </div>
        <div className={`${styles.group} ${styles.createGroup}`}>
          <CreateGroup></CreateGroup>
        </div>
        <div className={styles.group}>
          <h2> Groups</h2>
          <MyGroup></MyGroup>
        </div>
        {/* <div className={styles.group}>
          <h2> All Group</h2>
          <AllGroup></AllGroup>
        </div> */}

        {/* <h1 className={styles.title}>
          Welcome to <a href="">RainbowKit</a> + <a href="">wagmi</a> +{' '}
          <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a className={styles.card} href="https://rainbowkit.com">
            <h2>RainbowKit Documentation &rarr;</h2>
            <p>Learn how to customize your wallet connection flow.</p>
          </a>

          <a className={styles.card} href="https://wagmi.sh">
            <h2>wagmi Documentation &rarr;</h2>
            <p>Learn how to interact with Ethereum.</p>
          </a>

          <a
            className={styles.card}
            href="https://github.com/rainbow-me/rainbowkit/tree/main/examples"
          >
            <h2>RainbowKit Examples &rarr;</h2>
            <p>Discover boilerplate example RainbowKit projects.</p>
          </a>

          <a className={styles.card} href="https://nextjs.org/docs">
            <h2>Next.js Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            className={styles.card}
            href="https://github.com/vercel/next.js/tree/canary/examples"
          >
            <h2>Next.js Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            className={styles.card}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
      {/* 
      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
