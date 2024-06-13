import { NextIntlClientProvider } from "next-intl";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

import "~/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextIntlClientProvider locale={router.locale} messages={pageProps.messages}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </NextIntlClientProvider>
  );
}

export default App;
