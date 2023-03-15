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
          <nav className="flex flex-col text-neutral-400 absolute right-0 space-y-2 mr-6 mt-2">
            <Link href={"/work"}>
              <p className="hover:underline hover:text-orange-400 decoration-black decoration-2 transition ease-in-out delay-75">
                Work
              </p>
            </Link>
            <Link href={"/blog"}>
              <p className="hover:underline hover:text-orange-400 decoration-black decoration-2 transition ease-in-out delay-75">
                Blog
              </p>
            </Link>
            {/* <Link href={"/photography"}>
              <p>Photography</p>
            </Link> */}
            <Link href={"/contact"}>
              <p className="hover:underline hover:text-orange-400 decoration-black decoration-2 transition ease-in-out delay-75">
                Contact
              </p>
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
