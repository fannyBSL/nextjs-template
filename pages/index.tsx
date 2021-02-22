import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import Button from '@material-ui/core/Button'


export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({allPostsData}) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section>
            <Button color="primary"><a href="https://nextjs.org/learn">Next.js tutorial</a></Button>

            <p>
            This is a Next-Js template using with Styled-Component, Material-Ui and StoryBook.<br />
          </p>
        </section>
          <section>
              <h2>Blog</h2>
              <ul>
                  {allPostsData.map(({ id, date, title }) => (
                      <li key={id}>
                          <Link href={`/posts/${id}`}>
                              <a>{title}</a>
                          </Link>
                          <br />
                          <small>
                              <Date dateString={date} />
                          </small>
                      </li>
                  ))}
              </ul>
          </section>
      </Layout>
  )
}