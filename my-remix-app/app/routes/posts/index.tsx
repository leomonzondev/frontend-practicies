import { Link, useLoaderData } from "remix"
import { getPosts } from "./app/post"
import type { Post } from "./app/post"




export const loader =() => {
    return getPosts()
}





export default function Posts() {
    const posts = useLoaderData<Post[]>()
    console.log(posts);
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.slug}>
                            <Link to={post.slug}>{post.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
