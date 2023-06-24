"use client"
const getPostData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    return res.json()
}
const getRendom = async () => {
    const res = await fetch('https://randomuser.me/api', { cache: "force-cache" })
    return res.json()
}

async function Post() {

    const [posts, user] = await Promise.all([getPostData(), getRendom()])

    console.log(user);

    return (
        <div className=" mx-auto">
            <h1>This is post</h1>
            {
                posts.map(item => <div>
                    <p>{item.title}</p>
                </div>)
            }
            <div>
                <p>hello data  {
                    user.results[0].name.first
                }</p>
            </div>
        </div>
    )
}

export default Post;