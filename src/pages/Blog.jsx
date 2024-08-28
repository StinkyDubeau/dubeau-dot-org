import Frame from "../components/Frame";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";
import BlogPost from "../components/BlogPost";

export default function (props) {
    return (
        <>
            <Frame data={props.data}>
                <div className="mt-10">
                    <h1 className="font-header mb-8 text-3xl font-light tracking-tighter text-darken-700 max-sm:text-5xl">
                        Under Construction
                    </h1>

                    <BlogPost
                        title="Nutes"
                        date={new Date().toDateString()}
                        author="Jake Dubeau"
                        id="1234-asdf-5678-qwer"
                        body="Lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum."
                    />
                </div>
            </Frame>
        </>
    );
}
