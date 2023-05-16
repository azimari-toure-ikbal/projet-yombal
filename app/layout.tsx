import "./style.css";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Yombal - Trouvez la maison de vos rêves.",
  description: "Generated by create next app and used by 2 idiots in Senegal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={""}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        {/* <link rel="icon" href="/favicon.svg" /> */}
      </head>
      <body className={nunitoSans.className}>{children}</body>
    </html>
  );
}
