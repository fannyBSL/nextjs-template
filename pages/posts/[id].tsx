import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllPostIds, getPostData} from "../../lib/posts";
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({
     postData
    }  ) {
    return <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1>{postData.title}</h1>
            <div >
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
        </article>
    </Layout>
}
