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
    const [searchQuery, setSearchQuery] = useState("");

    function getTabInfo(tab) {
        let friendlyTitle = tab.title;
        let friendlyArtist = "Unknown artist";
        let friendlyType = "TABS";
        const regex = /^(.*?)\s+(CHORDS?|TAB)\s+.*?by\s+([^@]+)/i;
        const match = friendlyTitle.match(regex);

        if (match) {
            friendlyTitle = match[1].trim();
            friendlyType = match[2].trim();
            friendlyArtist = match[3].trim();
        }

        return {
            friendlyArtist,
            friendlyTitle,
            friendlyType,
        };
    }

    function shouldShowTab(tab) {
        const { friendlyArtist, friendlyTitle, friendlyType } = getTabInfo(tab);
        const query = searchQuery.trim().toLowerCase();
        const isChord = friendlyType.toLowerCase().includes("chord");
        const isTab = friendlyType.toLowerCase().includes("tab");

        if (hideChords && isChord) return false;
        if (hideTabs && isTab) return false;
        if (!query) return true;

        return [friendlyTitle, friendlyArtist, friendlyType, tab.uri]
            .filter(Boolean)
            .some((value) => value.toLowerCase().includes(query));
    }

    function getAllTabs() {
        return Bookmarks.children.flatMap((bookmark) =>
            bookmark.children ? bookmark.children : [bookmark],
        );
    }

    function filtersAreActive() {
        return (
            props.data.experimental &&
            (hideChords || hideTabs || searchQuery.trim().length > 0)
        );
    }

    function createBookmark(bookmark, index) {
        const visibleChildren = bookmark.children
            ? bookmark.children.filter(shouldShowTab)
            : [];

        if (bookmark.children && visibleChildren.length === 0) {
            return null;
        }

        if (!bookmark.children && !shouldShowTab(bookmark)) {
            return null;
        }

        return (
            <Panel
                className="min-w-0 overflow-hidden rounded-2xl bg-lighten-800 p-3 shadow-xl xs:p-4"
                key={bookmark.guid}
            >
                {/* Create a folder if there are children under this component. Otherwise create the tab. */}
                {bookmark.children ? (
                    <Folder
                        folder={bookmark}
                        visibleChildren={visibleChildren}
                    />
                ) : (
                    createTab(bookmark)
                )}
            </Panel>
        );
    }

    function Folder({ folder, visibleChildren }) {
        const [collapsed, setCollapsed] = useState(true);

        return (
            <div
                className={
                    collapsed ? "min-w-0" : "flex min-w-0 flex-col gap-4"
                }
            >
                <button
                    className="flex w-full min-w-0 flex-col gap-1 text-left font-header text-lg text-darken-800 xs:flex-row xs:justify-between xs:text-xl"
                    onClick={() => setCollapsed(collapsed ? false : true)}
                >
                    <p className="overflow-wrap-anywhere min-w-0 underline">
                        <span className="font-light">
                            {collapsed ? "Open" : "Close"}{" "}
                        </span>
                        {folder.title.toUpperCase()}
                    </p>
                    <p className="shrink-0 text-left text-sm text-darken-300 xs:text-base">
                        {visibleChildren.length} songs
                    </p>
                </button>
                {/* Type */}

                <div className="flex flex-col gap-4">
                    {!collapsed && visibleChildren.map(createTab)}
                </div>
            </div>
        );
    }

    function createTab(tab, index) {
        const { friendlyArtist, friendlyTitle, friendlyType } = getTabInfo(tab);

        return (
            <div key={tab.guid}>
                <Link
                    to={tab.uri}
                    className="flex min-w-0 flex-col"
                >
                    <div className="flex min-w-0 flex-col gap-1 xs:flex-row xs:justify-between">
                        <p className="overflow-wrap-anywhere min-w-0 text-left font-header text-lg text-darken-800 xs:text-xl">
                            {friendlyTitle}
                        </p>
                        <p className="shrink-0 text-left text-sm text-darken-300 xs:text-end xs:text-base">
                            {friendlyType}
                        </p>
                    </div>
                    <p className="overflow-wrap-anywhere min-w-0 text-left font-header text-lg text-darken-800 xs:text-xl">
                        by <span className="font-light">{friendlyArtist}</span>
                    </p>
                    <p className="overflow-wrap-anywhere min-w-0 text-left font-header text-xs text-darken-600">
                        {tab.uri}
                    </p>
                </Link>
            </div>
        );
    }

    function createTabResult(tab) {
        return (
            <Panel
                className="min-w-0 overflow-hidden rounded-2xl bg-lighten-800 p-3 shadow-xl xs:p-4"
                key={tab.guid}
            >
                {createTab(tab)}
            </Panel>
        );
    }

    function createSortControls() {
        return (
            <Panel className="text-left xs:p-4">
                <p className="font-pixel text-darken-600">
                    Experimental filters
                </p>
                <input
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search title, artist, type, or URL"
                    className="lit-input w-full min-w-0 rounded-xl px-3 py-2 font-header text-sm xs:text-base"
                />
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => {
                            setHideChords(false);
                            setHideTabs(false);
                        }}
                        className="lit-control min-w-0 flex-1 rounded-xl px-3 py-2 text-darken-800 xs:flex-none"
                    >
                        Show all
                    </button>
                    <button
                        onClick={() => {
                            setHideChords(false);
                            setHideTabs(true);
                        }}
                        className="lit-control min-w-0 flex-1 rounded-xl px-3 py-2 text-darken-800 xs:flex-none"
                    >
                        Chords only
                    </button>
                    <button
                        onClick={() => {
                            setHideChords(true);
                            setHideTabs(false);
                        }}
                        className="lit-control min-w-0 flex-1 rounded-xl px-3 py-2 text-darken-800 xs:flex-none"
                    >
                        Tabs only
                    </button>
                </div>
            </Panel>
        );
    }

    function createFilteredTabs() {
        const visibleTabs = getAllTabs().filter(shouldShowTab);

        if (visibleTabs.length === 0) {
            return (
                <Panel className="rounded-2xl p-4 text-left">
                    <p className="font-header text-xl text-darken-800">
                        No matching tabs.
                    </p>
                </Panel>
            );
        }

        return visibleTabs.map(createTabResult);
    }

    return (
        <>
            <div
                id="container"
                className="mx-auto my-4 flex w-full max-w-screen-lg flex-col gap-4 px-3 xs:px-4"
            >
                <p className="overflow-wrap-anywhere min-w-0 font-header text-3xl text-darken-800 sm:text-left">
                    Guitar Tabs
                </p>
                <p className="overflow-wrap-anywhere min-w-0 font-header text-darken-600 sm:text-left">
                    This is my collection of tabs dating back to about 2016. I
                    used to have a very full bookmarks folder. Now I have this.
                </p>
                {props.data.experimental && createSortControls()}
                {Bookmarks && filtersAreActive() ? (
                    createFilteredTabs()
                ) : Bookmarks ? (
                    Bookmarks.children.map(createBookmark)
                ) : (
                    <p className="italic text-darken-600">
                        Failed to load guitar tabs JSON.
                    </p>
                )}
            </div>
        </>
    );
}
