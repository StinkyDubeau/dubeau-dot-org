import Frame from "../components/Frame";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";
import BlogPost from "../components/BlogPost";

const testPost = `


in attempt to continue the RPG progression-scale that we have seen from MCMMO, i'm made a few changes:

- mobs will spawn a lot more frequently: *darkness will be much more dangerous than before*
- mob farms have increased capacity: *i disabled the "Too expensive" from anvils, promoting building bigger farms*
- i've added a recipe for enchanted bottles, allowing XP to serve an economic function promoting bigger farms*
- longer render distance:
> > if you've ever seen those tiktoks about the Distant Horizons mod, this is that! you can enable it if you want it (following this tutorial on "dubeau.org"[link])
> > this is opt-in and won't affect players who don't want to bother
- mods are coming
> > pictured is a screenshot of the (coming soon) dubeau.org modpack.
- day night has been extended. 20 minutes of day, followed by 10 minutes of night`;

export default function (props) {
    return (
        <>
            <Frame data={props.data}>
                <div className="mt-10">
                    <h1 className="mb-8 font-header text-3xl font-light tracking-tighter text-darken-700 max-sm:text-5xl">
                        Under Construction
                    </h1>

                    <div className="flex flex-col gap-2">
                        <BlogPost
                            title="Test post 1"
                            date={new Date().toDateString()}
                            author="Jake Dubeau"
                            id="this-is-the-post-identifier"
                            body="This is the body text of this post."
                        />

                        <BlogPost
                            title="**Vanilla Minecraft Server** |  Fall Changes"
                            date={new Date().toDateString()}
                            author="Jake Dubeau"
                            id="1234-asdf-5678-qwer"
                            body={testPost}
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
