// pages/_app.js
import React from "react";
import "../styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "../components/App";

export default function MyApp({ Component, pageProps }) {
	return <App {...pageProps} />;
}