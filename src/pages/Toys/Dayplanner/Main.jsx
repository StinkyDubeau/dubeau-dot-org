import Frame from "../../../components/Frame";
import UnderContruction from "../../../components/UnderConstruction";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// TODO:
// Categories: Is a task "Learning", "Health", "Work", "Fun"?
// Priority: Is a task "Urgent", "Important", "Normal", "Low"?
// creationDate: How long will a task take? Choose from a list of time blocks

// Weekly tasks: An option on all dailies to promote to a weekly.
// Weekly tasks: Daily tasks that the user can promote to weekly recurring tasks:
// - A weekly task has a target "completions count", which is set at the time of promotion.

export default function Dayplanner(props) {
    const [dailyTasks, setDailyTasks] = useState([
        {
            name: "Example daily task",
            description: "This is the description of the task.",
            uuid: uuidv4(),
            colour: "bg-yellow-400",
            creationDate: new Date(),
        },
    ]);

    const [weeklyTasks, setWeeklyTasks] = useState([]);

    // In minutes, how much time to dedicate to the day's tasks.
    const [dayDuration, setDayDuration] = useState(8 * 60);

    function DayMaker() {
        // This component visualizes a day of tasks, taking into consideration the duration of the "day duration", which can be set or changed by the user.
        return (
            <>
                <p>There are {dayDuration / 60} hours to fill today.</p>
                {dailyTasks.map((task, index) => (
                    <Task
                        key={task.uuid}
                        name={task.name}
                        description={task.description}
                        creationDate={task.creationDate}
                        colour={task.colour}
                        uuid={task.uuid ? task.uuid : "No UUID!"}
                        index={index}
                    />
                ))}
            </>
        );
    }

    function TaskMaker() {
        // name, description, creationDate, colour, uuids
        const [name, setName] = useState("");
        const [description, setDescription] = useState("");
        const [creationDate, setCreationDate] = useState(new Date());
        const [colour, setColour] = useState("bg-red-400");
        const [uuid, setUuid] = useState(uuidv4());

        return (
            <div className="rounded bg-lighten-800 p-2 shadow">
                {/* NAME */}
                <input
                    type="text"
                    placeholder="Name"
                    className="rounded bg-lighten-600 p-1"
                    onChange={(e) => setName(e.target.value)}
                />
                {/* DESCRIPTION */}
                <input
                    type="text"
                    placeholder="Description"
                    className="rounded bg-lighten-600 p-1"
                    onChange={(e) => setDescription(e.target.value)}
                />
                {/* COLOUR */}
                <select
                    className="rounded bg-lighten-600 p-1"
                    onChange={(e) => setColour(e.target.value)}
                >
                    <option value="bg-red-400">Red</option>
                    <option value="bg-green-400">Green</option>
                    <option value="bg-blue-400">Blue</option>
                    <option value="bg-purple-400">Purple</option>
                </select>

                <button
                    className="rounded bg-lighten-600 p-1"
                    onClick={() => {
                        // Add task to dailyTasks
                        setDailyTasks([
                            ...dailyTasks,
                            {
                                name,
                                description,
                                creationDate,
                                colour,
                                uuid,
                            },
                        ]);
                        // Clear input
                        setName("");
                        setDescription("");
                        setCreationDate(new Date());
                    }}
                >
                    Add task
                </button>
            </div>
        );
    }

    function Task({ index, name, description, creationDate, colour, uuid }) {
        const [showDetails, setShowDetails] = useState(false);

        return (
            <div className={`${colour} flex gap-2 rounded p-2 shadow`}>
                <p className="text-xl text-darken-600">#{index}</p>
                <div className="flex flex-col gap-2 text-left">
                    <p className="text-darken-600">{name}</p>
                    <p className="text-darken-600">{description}</p>
                    {showDetails && (
                        <p className="text-darken-600">
                            Task {uuid} created at{" "}
                            {creationDate.toLocaleTimeString()}
                        </p>
                    )}
                </div>
            </div>
        );
    }

    return (
        <>
            <Frame data={props.data}>
                {/* <UnderContruction heading="Dayplanner is under construction." /> */}
                <div className="mt-8 flex flex-col justify-center gap-2">
                    <div
                        id="tasks-container"
                        className="my-auto flex flex-col gap-2 rounded bg-lighten-800 p-2"
                    >
                        {" "}
                        <DayMaker />
                    </div>

                    <TaskMaker />
                </div>
            </Frame>
        </>
    );
}
