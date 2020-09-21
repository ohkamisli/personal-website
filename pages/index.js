import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title> Ömer Hamid Kamışlı </title>
            </Head>

            <main className={styles.main}>
                <div className={styles.title}>Hello World</div>
                <div className={styles.description}>I am still under development. Please wait.</div>
                <div className={styles.links}>
                    <Link href="https://www.udemy.com/user/omer-hamid-kamisli/"><a
                        className={styles.items}> Udemy</a></Link>
                    <Link href="https://twitter.com/ohkamisli"><a className={styles.items}> Twitter</a></Link>
                    <Link href="https://www.instagram.com/ohkamisli/"><a className={styles.items}> Instagram</a></Link>
                    <Link href="https://tr.linkedin.com/in/ohkamisli"><a className={styles.items}> Linkedin</a></Link>
                </div>
            </main>
        </div>
  )
}
