// "use client";
import React from "react";
import "./styles/style.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "kobakoo.com",
  description: "Created by kbk",
};

export default function RootLayout({ children, statusCode }) {
  if (statusCode === 404) {
    return <h1>404 Page not found</h1>;
  } else {
    return (
      <html lang="ja">
        <body>
          <Header />
          {children}
          <Analytics />
          <Footer />
        </body>
      </html>
    );
  }
}
