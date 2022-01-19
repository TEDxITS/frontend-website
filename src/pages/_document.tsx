// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/FivoSansModern/FivoSansModern-Regular.otf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/FivoSansModern/FivoSansModern-Medium.otf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/FivoSansModern/FivoSansModern-Bold.otf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/FivoSansModern/FivoSansModern-Heavy.otf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/FivoSansModern/FivoSansModern-ExtBlack.otf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/LuckiestGuy/LuckiestGuy-Regular.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/PilowLava/Pilowlava-Regular.otf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/Sympathizing/Sympathizing.ttf'
            as='font'
            crossOrigin=''
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
