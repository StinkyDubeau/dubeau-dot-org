import Frame from "../../components/Frame";
import Bookmarks from "../../assets/tabs.json";
import { Link } from "react-router-dom";
import Panel from "../../components/Panel";
import { useState } from "react";

// This component accepts a json file of Firefox bookmarks. It will create the folder structure of the data, rendering individual bookmarks as hyperlinks to their defined URIs.
// The component can only handle 2 layer of folder depth. All guitar tabs should be under a single folder, and artists may be further sorted into their own folders.

export default function (props) {
    const [hideTabs, setHideTabs] = useState(false);
    const [hideChords, setHideChords] = useState(false);

    function createBookmark(bookmark, index) {
        return (
            <Panel
                className="overflow-hidden p-4"
                key={bookmark.guid}
            >
                {bookmark.children
                    ? createFolder(bookmark)
                    : createTab(bookmark)}
            </Panel>
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

    function createTab(tab, index) {
        var friendlyTitle = tab.title;
        var friendlyArtist = "Unknown artist";
        var friendlyType = "TABS";
        const regex = /^(.*?)\s+(CHORDS?|TAB)\s+.*?by\s+([^@]+)/i;
        const match = friendlyTitle.match(regex);

        if (match) {
            // console.log("Match " + typeof match[1].trim() + " " + match[2].trim());

            friendlyTitle = match[1].trim();
            friendlyType = match[2].trim();
            friendlyArtist = match[3].trim();
        } else {
            console.log("Failed to parse information from entry");
        }

        if (hideChords && tab.friendlyType == "CHORDS") {
            return;
        }
        if (hideTabs && tab.friendlyType == "TAB") {
            return;
        }

        return (
            <div key={tab.guid}>
                <Link
                    to={tab.uri}
                    className="flex flex-col"
                >
                    <div className="flex justify-between">
                        <p className="text-left font-header text-xl text-darken-800">
                            {friendlyTitle}
                        </p>
                        <p className="text-end text-darken-300">
                            {friendlyType}
                        </p>
                    </div>
                    <p className="text-left font-header text-xl text-darken-800">
                        by <span className="font-light">{friendlyArtist}</span>
                    </p>
                    <p className="text-left font-header text-xs text-darken-600">
                        {tab.uri}
                    </p>
                </Link>
            </div>
        );
    }

    function createTab(tab, index) {
        var friendlyTitle = tab.title;
        var friendlyArtist = "Unknown artist";
        var friendlyType = "TABS";
        const regex = /^(.*?)\s+(CHORDS?|TAB)\s+.*?by\s+([^@]+)/i;
        const match = friendlyTitle.match(regex);

        if (match) {
            // console.log("Match " + typeof match[1].trim() + " " + match[2].trim());

            friendlyTitle = match[1].trim();
            friendlyType = match[2].trim();
            friendlyArtist = match[3].trim();
        } else {
            console.log("Failed to parse information from entry");
        }

        return (
            <div key={tab.guid}>
                <Link
                    to={tab.uri}
                    className="flex flex-col"
                >
                    <div className="flex justify-between">
                        <p className="text-left font-header text-xl text-darken-800">
                            {friendlyTitle}
                        </p>
                        <p className="text-end text-darken-300">
                            {friendlyType}
                        </p>
                    </div>
                    <p className="text-left font-header text-xl text-darken-800">
                        by <span className="font-light">{friendlyArtist}</span>
                    </p>
                    <p className="text-left font-header text-xs text-darken-600">
                        {tab.uri}
                    </p>
                </Link>
            </div>
        );
    }

    return (
        <>
            <Frame
                data={props.data}
                noScroll
            >
                <div className="flex w-full justify-center">
                    <div
                        id="container"
                        className="mt-4 flex flex-col gap-4"
                    >
                        <p className="text-left font-header text-3xl text-darken-800">
                            Guitar Tabs
                        </p>
                        <p className="max-w-md text-left font-header text-darken-600">
                            This is my personal collection of bookmarks to songs
                            I like to play.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <p className="font-header text-darken-800">
                                {hideChords.toString()}
                            </p>
                            <button
                                onClick={() => {
                                    setHideChords(false);
                                    setHideTabs(false);
                                }}
                                className="text-darken-600 underline"
                            >
                                Show all
                            </button>
                            <button
                                onClick={() => {
                                    setHideChords(false);
                                    setHideTabs(true);
                                }}
                                className="text-darken-600 underline"
                            >
                                Chords only
                            </button>{" "}
                            <button
                                onClick={() => {
                                    setHideChords(true);
                                    setHideTabs(false);
                                }}
                                className="text-darken-600 underline"
                            >
                                Tabs only
                            </button>{" "}
                        </div>
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
