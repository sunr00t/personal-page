import React  from "react";
import Head from 'next/head'
import About from "../components/About";
import Script from 'next/script';

export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>Bruno Nascimento - Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <Script id="clarity-script" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "ofw9kaxip7");`}
      </Script>
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About/>
      </main>
    </div>
    </>
  )
}