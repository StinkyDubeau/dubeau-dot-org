import Markdown from "react-markdown";
import Panel from "./Panel";

export default function BlogPost(props) {
    return (
        <>
            <Panel className="max-w-screen-md rounded-xl p-4 text-left text-darken-800">
                <Markdown className="text-2xl font-normal">
                    {props.title}
                </Markdown>
                <p className="mb-4 text-xl">
                    by <span className="font-normal">{props.author}</span> on{" "}
                    {props.date}
                </p>

                <Markdown className="">{props.body}</Markdown>

                <p className="mt-4 font-normal text-darken-300">{props.id}</p>
            </Panel>
        </>
    );
}
