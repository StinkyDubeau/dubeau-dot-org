import Frame from "../../components/Frame";
import Bookmarks from "../../assets/tabs.json";
import { Link } from "react-router-dom";
import Panel from "../../components/Panel";

// This component accepts a json file of Firefox bookmarks. It will create the folder structure of the data, rendering individual bookmarks as hyperlinks to their defined URIs.

function createBookmark(bookmark, index) {
    return (
        <Panel
            className=""
            key={bookmark.guid}
        >
            {bookmark.children ? createFolder(bookmark) : createTab(bookmark)}
        </Panel>
    );
}

function createTab(tab, index) {
    return (
        <div>
            <Link to={tab.uri}>
                <p className="text-3xl text-darken-800">{tab.title}</p>
                <p>{tab.guid}</p>
            </Link>
        </div>
    );
}

function createFolder(folder, index) {
    return (
        <div className="">
            <p>{folder.title}</p>
            <p>{folder.guid}</p>
            {folder.children && folder.children.map(createBookmark)}
        </div>
    );
}
export default function (props) {
    return (
        <>
            <Frame data={props.data}>
                <div
                    id="container"
                    className="flex flex-col gap-4"
                >
                    {Bookmarks ? (
                        Bookmarks.children.map(createBookmark)
                    ) : (
                        <p className="italic text-darken-600">
                            Failed to load guitar tabs JSON.
                        </p>
                    )}
                </div>
            </Frame>
        </>
    );
}
