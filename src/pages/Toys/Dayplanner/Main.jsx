import Frame from "../../../components/Frame";
import UnderContruction from "../../../components/UnderConstruction";
import { useState } from "react";

export default function Dayplanner(props) {
    const [dailyTasks, setDailyTasks] = useState([
        {
            name: "Look at bike",
            description: "What needs replaced?",
            deadline: new Date(),
        },
    ]);
    const [weeklyTasks, setWeeklyTasks] = useState([]);

    function TaskMaker() {
        // name, description, deadline
        const [name, setName] = useState("");
        const [description, setDescription] = useState("");
        const [deadline, setDeadline] = useState(new Date());

        return (
            <div className="rounded bg-lighten-800 p-2 shadow">
                <input
                    type="text"
                    placeholder="Name"
                    className="rounded bg-lighten-600 p-1"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    className="rounded bg-lighten-600 p-1"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="datetime-local"
                    className="rounded bg-lighten-600 p-1"
                    onChange={(e) => setDeadline(new Date(e.target.value))}
                />
                <button
                    className="rounded bg-lighten-600 p-1"
                    onClick={() => {
                        // Add task to dailyTasks
                        setDailyTasks([
                            ...dailyTasks,
                            { name, description, deadline },
                        ]);
                        // Clear input
                        setName("");
                        setDescription("");
                        setDeadline(new Date());
                    }}
                >
                    Add task
                </button>
            </div>
        );
    }

    function Task({ name, description, deadline }) {
        return (
            <div className="rounded bg-lighten-800 p-2 shadow">
                <p className="text-darken-600">{name}</p>
                <p className="text-darken-600">{description}</p>
                <p className="text-darken-600">
                    {deadline.toLocaleTimeString()}
                </p>
            </div>
        );
    }

    return (
        <>
            <Frame
                noNavbar
                data={props.data}
            >
                {/* <UnderContruction heading="Dayplanner is under construction." /> */}
                <div className="flex h-screen flex-col justify-center">
                    <div
                        id="tasks-container"
                        className="my-auto flex flex-col gap-2 rounded bg-lighten-800 p-2"
                    >
                        {dailyTasks.map((task, index) => (
                            <Task
                                key={index}
                                name={task.name}
                                description={task.description}
                                deadline={task.deadline}
                            />
                        ))}
                    </div>
                    <TaskMaker />
                </div>
            </Frame>
        </>
    );
}
