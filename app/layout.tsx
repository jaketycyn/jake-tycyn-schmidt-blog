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
        <div className="font-semibold text-slate-800">
          <Link href="/">
            <p className="-mb-3 text-sm font-semibold text-left scale-75">
              my name is
            </p>
            <h1 className="flex h-full my-auto mr-2 text-2xl text-right transition ease-in-out delay-75 text-neutral-600 hover:underline hover:text-orange-400 decoration-black decoration-2">
              Jake TyCyn Schmidt
            </h1>
          </Link>
          <nav className="absolute right-0 flex flex-col mt-2 mr-2 space-y-2 text-neutral-400">
            <Link href={"/work"}>
              <p className="text-right transition ease-in-out delay-75 hover:underline hover:text-orange-400 decoration-black decoration-2">
                Work
              </p>
            </Link>
            <Link href={"/blog"}>
              <p className="text-right transition ease-in-out delay-75 hover:underline hover:text-orange-400 decoration-black decoration-2">
                Blog
              </p>
            </Link>
            <Link href={"/photography"}>
              <p className="text-right transition ease-in-out delay-75 hover:underline hover:text-blue-400 decoration-black decoration-2">
                Photography
              </p>
            </Link>
            <Link href={"/contact"}>
              <p className="text-right transition ease-in-out delay-75 hover:underline hover:text-orange-400 decoration-black decoration-2">
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
        <div className="flex flex-col w-full h-full min-h-screen bg-yellow-400/10">
          {header}
          <div className="mx-auto max-w-7xl ">{children}</div>
        </div>
      </body>
    </html>
  );
}
