import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from'../styles/utils.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {ReactNode} from "react";

const name= 'Fanny'
export const siteTitle = 'Next.js Sample Website'

export default function ({ children, home } : {children: ReactNode, home?: boolean}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.co" />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.png"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                <>
                <Link href="/">
                    <a>
                        <Image
                            priority
                            src="/images/profile.png"
                            className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                            alt={name}
                            height={108}
                            width={108}
                        />
                    </a>
                </Link>
                    <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{name}</a>
                        </Link>
                    </h2>
                </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}