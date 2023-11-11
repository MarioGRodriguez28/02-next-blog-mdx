import PostList from '@/components/PostList'
import { allPosts } from 'contentlayer/generated'
import React from 'react'

const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date))

const totalPosts = posts.length;

const postsPerPage = 2;
const totalPages = Math.ceil(totalPosts / postsPerPage);
console.log(totalPosts)


export const metadata = {
    title: 'Listado de posts',
    description: 'Descripción del listado de posts'
}

const Posts = () => {
    return (
        <div>

            <h1 className='text-center my-4 text-3xl'>Posts</h1>
            <div className='grid gap-4'>
                <PostList posts={posts} />
            </div>
        </div>
    )
}

export default Posts