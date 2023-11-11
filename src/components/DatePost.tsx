import { Post } from "contentlayer/generated"
import Link from "next/link"

interface Props {
    post: Post
}

const DatePosted = ({post} :Props) => {
  return (
    <div>
      {/* <time>
        {new Date(post.date).toLocaleString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time> */}
      <DatePosted post={post}/>
    </div>
  );
};

export default DatePosted;
