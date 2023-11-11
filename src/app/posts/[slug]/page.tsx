import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"

interface Props {
    params: {
        slug: string
    }
}

export const generateStaticParams = () => {

    return allPosts.map(post => ({ slug: post._raw.flattenedPath }))
}

export const generateMetadata = ({ params }: Props) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
    return {
        title: post?.title,
        description: post?.description
    }
}
const PostLayout = ({ params }: Props) => {

    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
    let MDXContent
    if (!post) {
        return notFound()
    } else {
        MDXContent = useMDXComponent(post.body.code)
    }

    return (<div>

        <div className="text-center my-4 text-3xl">{post.title}</div>
        <time>
            {new Date(post.date).toLocaleString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
            })}
        </time>

        <MDXContent />
    </div>
    )
}

export default PostLayout