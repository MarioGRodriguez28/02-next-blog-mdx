import { allPosts, Post } from "contentlayer/generated";

import PostList from "@/components/PostList";
import PostPagination from "@/components/PostPagination";
import { notFound } from "next/navigation";
import { getPagination } from "@/utils/pagination";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date))

interface Props {

    params: {
        number: string;
    }
}
export const generateStaticParams = () => {
    return Array.from({ length: posts.length }).map((_, i) => ({
        number: `${i + 1}`
    }))
}

const LayoutPages = ({ params }: Props) => {
    let arrayCurrentPost
    let totalPageNumber

    try {
        
     const {currentPosts, totalPages}  = getPagination(posts, 2,params.number)
     arrayCurrentPost = currentPosts
     totalPageNumber = totalPages
    } catch (error) {
        notFound()
    }


    return (
        <div>

            <h1 className='text-center my-4 text-3xl'>Posts</h1>
            <div className='grid gap-4'>
                <PostList posts={arrayCurrentPost} />
                {
                    totalPageNumber > 1 && <PostPagination
                        totalPages={totalPageNumber}
                        currentPage={parseInt(params.number)} />}


            </div>
        </div>

    )
}

export default LayoutPages
