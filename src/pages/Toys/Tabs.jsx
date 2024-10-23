import Frame from "../../components/Frame";
import Bookmarks from "../../assets/tabs.json";
import { Link } from "react-router-dom";
import Panel from "../../components/Panel";

// This component accepts a json file of Firefox bookmarks. It will create the folder structure of the data, rendering individual bookmarks as hyperlinks to their defined URIs.
// The component can only handle 2 layer of folder depth. All guitar tabs should be under a single folder, and artists may be further sorted into their own folders.

function createBookmark(bookmark, index) {
    return (
        <Panel
            className="overflow-hidden p-4"
            key={bookmark.guid}
        >
            {bookmark.children ? createFolder(bookmark) : createTab(bookmark)}
        </Panel>
    );
}

function createTab(tab, index) {
    return (
        <div key={tab.guid}>
            <Link to={tab.uri}>
                <p className="font-header text-3xl text-darken-800">
                    {tab.title}
                </p>
                <p className="font-header text-xs text-darken-600">{tab.uri}</p>
            </Link>
        </div>
    );
}

function createFolder(folder, index) {
    return (
        <div className="">
            <p className="rounded-full bg-darken-100 font-header text-3xl text-darken-800">
                {folder.title}
            </p>
            {/* <p>{folder.guid}</p> */}
            <div className="gap-4da flex flex-col">
                {folder.children && folder.children.map(createTab)}
            </div>
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
