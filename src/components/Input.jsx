import { useState } from "react";

export default function InfoButton(props) {
    const [expanded, setExpanded] = useState(false);

    function createDropdown() {
        return (
            <div tabindex="0" className="rounded-lg bg-lighten-800 shadow">
                <div tabindex="0" className="card-body">
                    <p>{props.text}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="">
            <label className="flex items-center gap-2 rounded-xl bg-darken-50 p-2 shadow-inner">
                <input
                    type="text"
                    className="grow bg-transparent"
                    placeholder="Email"
                    onChange=""
                />
                <div
                    tabindex="0"
                    role="button"
                    className=""
                    onClick={() => {
                        expanded ? setExpanded(false) : setExpanded(true);
                    }}
                >
                    <svg
                        tabindex="0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 stroke-current"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                </div>
            </label>

            {expanded && createDropdown()}
        </div>
    );
}
