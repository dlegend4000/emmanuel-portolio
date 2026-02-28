import type React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "var(--warm-bg)", minHeight: "100vh" }}>
      <div className="mx-auto max-w-2xl px-8">
        <Header />
        <main className="pb-16">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
