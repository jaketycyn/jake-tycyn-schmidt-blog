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
      <div className="flex flex-row justify-end ">
        <div className="text-slate-800">
          <Link href="/">
            <h1 className="flex text-2xl items-center  my-auto h-full mr-4">
              Jake TyCyn Schmidt
            </h1>
          </Link>
          <nav className="flex flex-col text-black  bg-pink-300 absolute right-0 space-y-4 mr-6">
            <Link href={"/work"}>
              <p>Work</p>
            </Link>
            <Link href={"/blog"}>
              <p>Blog</p>
            </Link>
            {/* <Link href={"/photography"}>
              <p>Photography</p>
            </Link> */}
            <Link href={"/contact"}>
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
        <div className="flex flex-col w-full h-full min-h-screen  bg-yellow-400/10">
          {header}
          <div className=" max-w-4xl mx-auto ">{children}</div>
        </div>
      </body>
    </html>
  );
}
