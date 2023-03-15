import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import Link from "next/link";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post, index) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-2 gap-10 mt-20 ">
      {/* Intro Section */}
      <div className="col-start-1 col-end-3 text-center text-6xl font-semibold">
        <h1 className="text-blue-900">Photographer</h1>
        <h1>turned</h1>
        <h1 className="text-orange-600">front-end Developer.</h1>
      </div>

      {/* Link Section */}
      <Link href={"/contact"}>
        <div className=" w-96 h-48 bg-yellow-900/30 hover:scale-105 transition-900 transition shadow-xl rounded-lg">
          <div className="p-4 group">
            <h2 className="text-2xl mb-2 font-semibold ml-4 group-hover:text-blue-400">
              Contact
            </h2>
            <p className="text-md">
              Need a passionate front-end designer? Have questions or want to
              pass along a friend comment? Get in touch!
            </p>
          </div>
        </div>
      </Link>
      <Link href={"/work"}>
        <div className="w-96 h-48 bg-yellow-900/30 hover:scale-105 transition-900 transition shadow-xl rounded-lg">
          <div className="p-4 group">
            <h2 className="text-2xl mb-2 font-semibold ml-4 group-hover:text-blue-400">
              Work
            </h2>
            <p className="text-md">
              Explore my coding projects and libraries showcasing my passion for
              problem-solving. From web development to data analysis, discover
              the tools and applications I&apos;ve created to simplify tasks and
              boost efficiency.
            </p>
          </div>
        </div>
      </Link>
      <Link href={"/blog"}>
        <div className=" w-96 h-48 bg-yellow-900/30 hover:scale-105 transition-900 transition shadow-xl rounded-lg">
          <div className="p-4 group">
            <h2 className="text-2xl mb-2 font-semibold ml-4 group-hover:text-blue-400 ">
              Blog
            </h2>
            <p className="text-md text-zinc-800 font-semibold">
              View my journey of learning web development. I share my
              experiences, successes, and failures along the way. Follow along
              to gain insights and learn from my process.
            </p>
          </div>
        </div>
      </Link>
      <Link href={"/photography"}>
        <div className=" w-96 h-48 bg-yellow-900/30 hover:scale-105 transition-900 transition shadow-xl rounded-lg">
          <div className="p-4 group">
            <h2 className="text-2xl mb-2 font-semibold ml-4 group-hover:text-blue-400">
              Photography
            </h2>
            <p className="text-md text-zinc-800 font-semibold">
              Photography provides me with immense mental, physical and
              spiritual satisfaction. Check out some of my work.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
