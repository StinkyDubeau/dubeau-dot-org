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

var BlogPosts = {
    TestPost1: {
        body: `hello femboy gamers, there are changes coming to the "Summer Server 2024" world this winter.

__TLDR: We are going to continue the existing world with mods.__ We are strongly considering: **Create, Seasons, Pixelmon, Farmer's Delight, and more** for the modpack, but we are still trialing how they work together. If you have any requests, let Simon or myself know.

If you want to experiment with the mods, follow the instructions at https://www.dubeau.org/servers/modded. The server is running right now, and everyone has /op access by default! The server will run on Fabric 1.20.1. Which, you may have noticed, is a downgrade from 1.21. That means we will lose any blocks added after that update. Mostly Tuff blocks are affected. Dogs will be safely reverted to their old wolf texture.

Connect to the vanilla server at mc.dubeau.org
Connect to the modded server at mc.dubeau.org:25569

Check it out, and stay tuned for updates. We will vote on a launch date soon, if anyone still has a minecraft itch. I will personally be starting a new town after the upgrade. Thanks gaymores`,
    },
    TestPost2: {
        body: "hello world",
    },
};

export default function (props) {
    return (
        <>
            <Frame data={props.data}>
                <div className="mt-10">
                    <h1 className="mb-8 font-header text-3xl tracking-tighter text-darken-700 max-sm:text-5xl">
                        Blog is under construction. <br /> All posts are
                        experimental.
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
