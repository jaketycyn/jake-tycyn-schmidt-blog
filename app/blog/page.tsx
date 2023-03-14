import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";

const BlogPage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post, index) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return <div className="grid grid-cols-1 gap-4 mt-20">{postPreviews}</div>;
};

export default BlogPage;
