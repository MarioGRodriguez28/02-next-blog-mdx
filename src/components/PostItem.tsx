import { Post } from "contentlayer/generated"
import Link from "next/link"

interface Props {
    post: Post
}
const PostItem = ({ post }: Props) => {
    return (
        <>
            <article className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <div className='px-6 py-4'>
                    <h2 className='font-bold text-xl mb-2'>
                        <Link href={post.url}>{post.title} </Link>
                    </h2>
                    <time>
                        {new Date(post.date).toLocaleString("es-ES", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })}
                    </time>


                    <div className='text-gray-700 text-base'>{post.description}</div>
                </div>
            </article>
        </>
    )
}

export default PostItem