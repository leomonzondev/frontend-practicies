const getPosts = async (user) => {
 
    const userId = Math.floor(Math.random() * 10) + 1

    const url = `https://jsonplaceholder.typicode.com/posts?userId=${user}`
    const res = await fetch(url)
    const posts = await res.json()

    return posts
}

export default getPosts;