import { Metadata } from "next";
import "../styles/globals.scss";
import AuthProvider from "./auth/AuthProvider";
import { Provider } from "react-redux";
import { RTProvider } from "./block/RTProvider";

// Metadata setup for the application
export const metadata: Metadata = {
  icons: "favicon.ico",
  applicationName: "EasyWaySEO",
  openGraph: {
    siteName: "EasyWaySEO",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
      <title>49565194</title>

        <link rel="icon" href="" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="" />
        {/* Meta Tags */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Vazirmatn:wght@100..900&display=swap"
          rel="stylesheet"
        />

        <meta name="title" content="49565194" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </head>
      <body className="bgai">
      <AuthProvider>
            <RTProvider>{children}</RTProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
