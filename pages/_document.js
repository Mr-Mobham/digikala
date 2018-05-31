import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class extends Document {
  static async getInitialProps(ctx) {
    const { html, head, errorHtml, chunks } = ctx.renderPage();
    const styles = flush();
    const session = ctx.req.session;
    return { html, head, errorHtml, chunks, styles, session };
  }

  render() {
    // console.log(this.props);
    return (
      <html>
        <Head>
          <script
            id="session"
            type="application/json"
            dangerouslySetInnerHtml={{
              __html: JSON.stringify(this.props.session, null, 2)
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
