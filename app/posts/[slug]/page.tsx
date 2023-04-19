import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

import getPostMetadata from "@/components/getPostMetadata";
import Link from "next/link";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="p-4 prose bg-white border-2 shadow-lg lg:prose-lg border-yellow-400/20">
      <h4 className="w-full text-4xl font-bold text-center break-normal ">
        {post.data.title}
      </h4>
      <article className="">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
