import "./globals.css";

export const metadata = {
  title: "Signal & Noise",
  description:
    "A public architecture lab exploring governance and structure in intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="shell">{children}</div>
      </body>
    </html>
  );
}
