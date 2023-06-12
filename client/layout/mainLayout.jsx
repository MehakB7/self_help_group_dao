import { useRouter } from "next/router";
import styles from "./../styles/Home.module.css";

import { ConnectButton } from "@rainbow-me/rainbowkit";
export default function MainLayout({ children }) {
  const router = useRouter();
  return (
    <>
      {/* <head>
        <title>swaym_sahayta_samuh By Naushad</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </head> */}
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.navigation}>
            <h1
              style={{
                marginLeft: "0px",
                color: "black",
                padding: "10px",
                borderRadius: "10px",
                fontSize: "50px",
                textShadow:
                  "0 4px 8px #ffffff, 0 6px 20px rgba(255, 255, 255, 0.5)",
              }}
              onClick={() => router.push("/")}
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
          {children}
        </main>
        {/* 
      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer> */}
      </div>
    </>
  );
}
