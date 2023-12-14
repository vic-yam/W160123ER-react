import { useState } from "react";

const SetPosts = () => {
    const INITIAL_POST = {
        title: '',
        subtitle: '',
        author: '',
        createdAt: '',
    }

    if(true || false) {
        console.log("Hello world");
    }



    const [post, setPost] = useState(INITIAL_POST);
    const [posts, setPosts] = useState([]);

    const createNewPost = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setPosts([...posts, {...post, createdAt: new Date().toLocaleString()}]);
        setPost(INITIAL_POST);
    }
    return (
        <div>
            <form>
                <h5>Post title: {post.title} {post.subtitle} {post.author}</h5>
                <input placeholder="Enter title" type="text" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
                <input placeholder="Enter subtitle" type="text" value={post.subtitle} onChange={(e) => setPost({ ...post, subtitle: e.target.value })} />
                <input placeholder="Enter author" type="text" value={post.author} onChange={(e) => setPost({ ...post, author: e.target.value })} />
                <button onClick={createNewPost} disabled={!post.title || !post.subtitle || !post.author}>Submit</button>
            </form>

            {!!posts.length && (
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Subtitle</th>
                            <th>Author</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{post.title}</td>
                                <td>{post.subtitle}</td>
                                <td>{post.author}</td>
                                <td>{post.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default SetPosts;