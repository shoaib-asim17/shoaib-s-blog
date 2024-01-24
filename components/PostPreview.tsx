import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-900 p-4 rounded-md shadow-sm
    bg gradient-to-b dark:from voilet-950 dark:to black-700"
    >
      <p className="text-sm text-slate-400">{props.date}</p>

      <Link href={`/posts/${props.slug}`}>
        <h2 className=" text-yellow-200 hover:underline mb-4">{props.title}</h2>
      </Link>
      <p className="text-slate-200">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;