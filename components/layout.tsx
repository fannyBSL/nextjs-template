import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {ReactNode} from "react";

const name= 'Next.js Template'
export const siteTitle = 'Next.js Template'

export default function ({ children, home } : {children: ReactNode, home?: boolean}) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon-32x32.png" />
                <meta
                    property="og:image"
                    content="/images/BlueSky.svg"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/BlueSky.svg"
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1>{name}</h1>
                    </>
                ) : (
                <>
                <Link href="/">
                    <a>
                        <Image
                            priority
                            src="/images/profile.png"
                            alt={name}
                            height={108}
                            width={108}
                        />
                    </a>
                </Link>
                    <h2>
                        <Link href="/">
                            <a>{name}</a>
                        </Link>
                    </h2>
                </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}