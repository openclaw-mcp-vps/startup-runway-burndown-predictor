import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Runway Predictor — Know Exactly When You Run Out of Cash",
  description: "Connect your bank accounts and expense tools to predict your exact cash depletion date using burn rate trends and seasonal adjustments. Built for startup founders and CFOs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="058d1d2a-57be-40a8-8b9c-6de0c40bfaab"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
