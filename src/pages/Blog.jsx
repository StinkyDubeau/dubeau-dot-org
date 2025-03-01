import Frame from "../components/Frame";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import { useEffect, useState } from "react";

const url = `http://${import.meta.env.VITE_API_URL}`;

export default function Blog(props) {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        async function fetchBlogPosts() {
            try {
                console.log(`Fetching blog posts from ${url}/fetchBlogPosts`);
                const response = await fetch(`${url}/fetchBlogPosts`, {
                    mode: "cors",
                });
                const data = await response.json();
                setBlogPosts(data);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            }
        }

        fetchBlogPosts();
    }, []);

    function createBlogPost(post) {
        return (
            <BlogPost
                key={post._id || "no-key"}
                title={post.title || "Untitled"}
                date={post.date || new Date().toDateString()}
                author={post.author || "Unknown"}
                id={post._id || "no-id"}
                body={post.body || ""}
            />
        );
    }

    return (
        <>
            <Frame data={props.data}>
                <div className="mt-10">
                    <h1 className="mb-8 font-header text-3xl tracking-tighter text-darken-700 max-sm:text-5xl">
                        Blog is under construction.
                    </h1>

                    <div className="flex flex-col gap-2">
                        {blogPosts.map((post) => createBlogPost(post))}
                    </div>
                </div>
            </Frame>
        </>
    );
}
