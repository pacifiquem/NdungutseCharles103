import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "../contexts/AppContext";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppProvider>
			<Head>
				{/* <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> */}
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content="A ground where nyou can find everything you need to know about ndungutse charles and his career"
				/>
				<title>Ndungutse Charles</title>
			</Head>
			<Component {...pageProps} />
			<Analytics />
		</AppProvider>
	);
}

export default MyApp;
