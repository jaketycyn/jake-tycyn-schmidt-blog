import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md ">
      <p className="text-xs text-left text-slate-400">{props.date}</p>
      <Link href={`/posts/${props.slug}`}>
        <h2 className="font-bold text-left text-blue-800 hover:underline">
          {props.title}
        </h2>
      </Link>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
