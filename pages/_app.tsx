import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/Layout";
import { useEffect } from "react";
import { CartProvider } from "./context/CartContext";
import BootstrapClient from "./components/BootstrapClient";
import AuthProvider from "./context/LoginContext";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <AuthProvider>
    <CartProvider>
    <Layout>
      <BootstrapClient />
      <Component {...pageProps} />
    </Layout>
    </CartProvider>
    </AuthProvider>

  );
}
