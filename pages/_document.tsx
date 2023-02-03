import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Book Recommendations" />
          <meta property="og:site_name" content="book-rec.vercel.app" />
          <meta property="og:description" content="Book Recommendations" />
          <meta property="og:title" content="AI generated Book Rec" />
          <meta
            property="og:image"
            content="https://book-rec.vercel.app/berserk.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
