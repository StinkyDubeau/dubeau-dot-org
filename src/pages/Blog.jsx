import Frame from "../components/Frame";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";
import BlogPost from "../components/BlogPost";


export default function (props) {
    return (
        <>
            <Frame data={props.data}>
                <div className="mt-10">
                    <h1 className="mb-8 font-header text-3xl tracking-tighter text-darken-700 max-sm:text-5xl">
                        Blog is under construction.
                    </h1>

                    <div className="flex flex-col gap-2">
                        <BlogPost
                            title="Test post 1"
                            date={new Date().toDateString()}
                            author="Jake Dubeau"
                            id="this-is-the-post-identifier"
                            body={""}
                        />

                        <BlogPost
                            title="**Vanilla Minecraft Server** |  Fall Changes"
                            date={new Date().toDateString()}
                            author="Jake Dubeau"
                            id="1234-asdf-5678-qwer"
                            body="This may very well be a blog post. Or it may not be. Or maybe it is?"
                        />

                        <BlogPost
                            title="Test post 3"
                            date={new Date().toDateString()}
                            author="Jake Dubeau"
                            id="random-letters-and-numbers"
                            body="This is the body text of this post."
                        />
                    </div>
                </div>
            </Frame>
        </>
    );
}
