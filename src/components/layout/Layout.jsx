import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto">{children}</main>
    </div>
  );
}
