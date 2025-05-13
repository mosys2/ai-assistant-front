import { Metadata } from "next";
import "../styles/globals.scss";
import AuthProvider from "./(main)/(blocks)/AuthProvider";
import { RTProvider } from "./(main)/(blocks)/RTProvider";

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

        <meta name="title" content="Hooshiva هوشیوا" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </head>
      <body>
      <AuthProvider>
            <RTProvider>{children}</RTProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
