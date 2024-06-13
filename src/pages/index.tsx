import Head from "next/head";

import Layout from "~/components/Layout";
import Header from "~/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
      </Layout>
    </>
  );
}
export const getStaticProps = async (context: any) => ({
  props: {
    messages: (await import(`src/lang/${context.locale}.json`)).default,
  },
});
