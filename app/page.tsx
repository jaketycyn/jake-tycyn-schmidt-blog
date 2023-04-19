import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post, index) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-2 gap-10 mt-20 mb-20 scrollbar-hide ">
      {/* Headline Section */}
      <div className="col-start-1 col-end-3 text-4xl font-semibold text-center lg:text-6xl">
        <h1>I create applications</h1>
        <h1>using react, typescript </h1>
        <h1>psql and tailwindcss</h1>
      </div>
      {/* LeftSide Text + Photo */}

      <div className="col-start-1 col-end-3">
        <div className="flex flex-row">
          <Image
            src={"/images/jaketycynschmidt_headshot.jpg"}
            width="125"
            height="125"
            alt="headshot"
            className="border-0 border-orange-400 rounded-full hover:scale-115 hover:border-2 decoration-orange-400"
          />
          <div className="flex flex-col ml-10 font-semibold">
            <p className="text-slate-400">I&apos;m a </p>
            <Link href={"/photography"}>
              <h1 className="text-lg text-blue-400 duration-150 ease-in hover:scale-105 hover:underline decoration-black decoration-2">
                Photographer
              </h1>
            </Link>
            <p className="text-slate-400">turned</p>
            <Link href={"/work"}>
              <h1 className="text-lg text-orange-600 duration-150 ease-in hover:scale-105 hover:underline decoration-black decoration-2">
                Software Engineer.
              </h1>
            </Link>
            <p className="text-slate-400">located in sunny Santa Monica, CA</p>
          </div>
        </div>
      </div>

      {/* Link Section */}
      <div className="grid grid-cols-1 col-start-1 col-end-3 gap-4 lg:grid-cols-2 lg:gap-10">
        <Link href={"/contact"}>
          <div className="h-48 transition duration-200 ease-in rounded-lg shadow-md w-96 bg-yellow-900/30 hover:scale-105 hover:shadow-xl ">
            <div className="p-4 group">
              <h2 className="mb-2 ml-4 text-2xl font-semibold group-hover:text-orange-600">
                Contact
              </h2>
              <p className="font-semibold text-md text-zinc-700">
                Need a passionate front-end designer? Have questions or want to
                pass along a friend comment? Get in touch!
              </p>
            </div>
          </div>
        </Link>
        <Link href={"/work"}>
          <div className="h-48 transition duration-200 ease-in rounded-lg shadow-md w-96 bg-yellow-900/30 hover:scale-105 hover:shadow-xl">
            <div className="p-4 group">
              <h2 className="mb-2 ml-4 text-2xl font-semibold group-hover:text-orange-600">
                Work
              </h2>
              <p className="font-semibold text-md text-zinc-700">
                Explore my coding projects and libraries showcasing my passion
                for problem-solving. From web development to data analysis,
                discover the tools and applications I&apos;ve created to
                simplify tasks and boost efficiency.
              </p>
            </div>
          </div>
        </Link>
        <Link href={"/blog"}>
          <div className="h-48 transition duration-200 ease-in rounded-lg shadow-md w-96 bg-yellow-900/30 hover:scale-105 hover:shadow-xl">
            <div className="p-4 group">
              <h2 className="mb-2 ml-4 text-2xl font-semibold group-hover:text-orange-600 ">
                Blog
              </h2>
              <p className="font-semibold text-md text-zinc-700">
                View my journey of learning web development. I share my
                experiences, successes, and failures along the way. Follow along
                to gain insights and learn from my process.
              </p>
            </div>
          </div>
        </Link>
        <Link href={"/photography"}>
          <div className="h-48 transition duration-200 ease-in rounded-lg shadow-md w-96 bg-yellow-900/30 hover:scale-105 hover:shadow-xl">
            <div className="p-4 group">
              <h2 className="mb-2 ml-4 text-2xl font-semibold group-hover:text-blue-400">
                Photography
              </h2>
              <p className="font-semibold text-md text-zinc-800">
                Photography provides me with immense mental, physical and
                spiritual satisfaction. Check out some of my work.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
