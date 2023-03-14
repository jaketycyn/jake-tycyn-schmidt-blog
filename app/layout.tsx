import "./globals.css";

export const metadata = {
  title: "Jake TyCyn Schmidt Blog",
  description: "Blog of a front-end dev's journey learning new things",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div>
        <h1>Header Content</h1>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div>
        <h2>Footer Content </h2>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <head />
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
