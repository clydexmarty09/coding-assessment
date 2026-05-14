import "./globals.css";

export const metadata = {
  title: "Survey App",
  description: "Simple personality survey form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
