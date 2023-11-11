import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import React from 'react'

const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date))



const Posts = () => {
    return (
        <div>

            <h1 className='text-center my-4 text-3xl'>Posts</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {posts.map((post) => (
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
                ))}
            </div>
        </div>
    )
}

export default Posts