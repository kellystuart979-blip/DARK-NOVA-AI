import "./globals.css";

export const metadata = {
  title: "DARK NOVA AI - Built by STORM X",
  description: "DARK NOVA AI - Based on DARK NOVA LABS",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="bg-[#0a0a0a]">{children}</body>
    </html>
  );
}
