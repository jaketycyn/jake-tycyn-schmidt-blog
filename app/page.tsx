import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post, index) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-2 gap-4 mt-20">
      <div>thing1</div>
      <div>thing2</div>
      <div>thing3</div>
      <div>thing4</div>
    </div>
  );
};

export default HomePage;
