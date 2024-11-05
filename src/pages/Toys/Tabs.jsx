import Frame from "../../components/Frame";
import Bookmarks from "../../assets/tabs.json";
import { Link } from "react-router-dom";
import Panel from "../../components/Panel";
import { useState } from "react";

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
    var friendlyTitle = tab.title;
    var friendlyArtist = "Unknown artist";
    const regex = /^(.*?)\s+(?:CHORDS|TAB)\s+.*?by\s+([^@]+)/i;
    const match = friendlyTitle.match(regex);

    if (match) {
        console.log("Match " + typeof match[1].trim() + " " + match[2].trim());

        friendlyTitle = match[1].trim();
        friendlyArtist = match[2].trim();
    } else {
        // friendlyTitle = "FAILED";
    }

    return (
        <div key={tab.guid}>
            <Link
                to={tab.uri}
                className="flex flex-col"
            >
                <p className="text-left font-header text-xl text-darken-800">
                    {friendlyTitle}
                </p>
                <p className="text-left font-header text-xl text-darken-800">
                    by{" "}
                    <span className="font-light">
                        {friendlyArtist}
                    </span>
                </p>
                <p className="font-header text-xs text-darken-600">{tab.uri}</p>
            </Link>
        </div>
    );
}

function createFolder(folder, index) {
    const [collapsed, setCollapsed] = useState(true);

    function createButton() {
        return (
            <div className={`${collapsed && "h-4"} transition-all`}>
                <button
                    className="text-md rounded-2xl bg-darken-300 font-header text-lighten-800 transition-all hover:bg-darken-400 active:bg-darken-500"
                    onClick={() => setCollapsed(collapsed ? false : true)}
                >
                    Open folder
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            <p className="rounded-full bg-darken-50 font-header text-3xl text-darken-800">
                {folder.title}
                {collapsed && createButton()}
            </p>
            {/* <p>{folder.guid}</p> */}
            <div className="flex flex-col gap-6">
                {!collapsed &&
                    folder.children &&
                    folder.children.map(createTab)}
            </div>
        </div>
    );
}

export default function (props) {
    return (
        <>
            <Frame data={props.data} noScroll>
                <div className="flex w-full justify-center">
                    <div
                        id="container"
                        className="mt-4 flex flex-col gap-4"
                    >
                        <p className="font-header text-3xl text-darken-800">
                            Guitar Tabs
                        </p>
                        <p className="max-w-md font-header text-darken-600">
                            This section of the site is under construction. This
                            is my personal collection of bookmarks to songs I
                            like to play.
                        </p>
                        {Bookmarks ? (
                            Bookmarks.children.map(createBookmark)
                        ) : (
                            <p className="italic text-darken-600">
                                Failed to load guitar tabs JSON.
                            </p>
                        )}
                    </div>
                </div>
            </Frame>
        </>
    );
}
