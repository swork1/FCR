import type { ComponentType } from "react";
import React from "react";

export default function App({
  Page,
  pageProps,
}: {
  Page: ComponentType<any>;
  pageProps: any;
}) {
  return (
    <main>
      <head>
        <title>Hello World - Aleph.js</title>
      </head>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.12.2/antd.min.css"
        rel="stylesheet"
      />
      <Page {...pageProps} />
    </main>
  );
}
