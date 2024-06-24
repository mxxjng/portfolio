import Head from "next/head";

import Layout from "~/components/Layout";
import Header from "~/components/Header";
import About from "~/components/About/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <About />
      </Layout>
    </>
  );
}
export const getStaticProps = async (context: any) => ({
  props: {
    messages: (await import(`src/lang/${context.locale}.json`)).default,
  },
});
