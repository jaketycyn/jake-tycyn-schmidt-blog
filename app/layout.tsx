import Link from "next/link";
import "../styles/globals.css";

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
      <div className="bg-slate-800 h-14  flex flex-row justify-end ">
        <div className="text-slate-300">
          <Link href="/">
            <h1 className="flex text-2xl items-center  my-auto h-full">
              Jake TyCyn Schmidt
            </h1>
          </Link>
          <nav className="flex flex-col text-black  bg-pink-300 absolute right-0 space-y-4 mr-6">
            <Link href={"/1"}>
              <p>Work</p>
            </Link>
            <Link href={"/2"}>
              <p>Blog</p>
            </Link>
            {/* <Link href={"/3"}>
              <p>Photography</p>
            </Link> */}
            <Link href={"/3"}>
              <p>Contact</p>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );

  return (
    <html lang="en">
      <head />
      <body>
        <div className=" border-slate-400">
          {header}
          <div className=" max-w-4xl mx-auto border">{children}</div>
        </div>
      </body>
    </html>
  );
}
