import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation';
import { ThemeProvider } from 'next-themes'
import Footer from '../components/Footer';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
      </ThemeProvider>
      <Script id="clarity-script" strategy="afterInteractive">
          {`
            function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
        </Script>
    </>
  );
}

export default MyApp;
