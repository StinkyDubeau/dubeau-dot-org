import Frame from "../../../components/Frame";
import { useState, useEffect, memo } from "react";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";
import { DateTime } from "luxon";

// TODO:
// Categories: Is a task "Learning", "Alone-time", "Self-care", "Chores"?
// Priority: Is a task "Urgent", "Important", "Normal", "Low"?
// creationDate: How long will a task take? Choose from a list of time blocks
// This page should load for any day; Past present or future.
// Change from Js Date to Luxon DateTime.

// Weekly tasks:
// - Daily tasks that the user can promote to weekly recurring tasks:
// - A weekly task has a target "completions count", which is set at the time of promotion.

// Data handling:
// - Store tasks in cookies or local storage.
// - Load tasks from cookies or local storage.
// - Save tasks to a database, or share as plain text.
// - Load tasks from a database, or import from plain text.

// Time management:
// https://www.npmjs.com/package/d3-time
// Use that package for doing relative time calculations.
// - How much time is left in the day?

// TODO: App structure:
// - Create onboarding process <-> animated wizard
// - Page generates a wizard from a simple .json input. Keys values will prompt the user for input,

// createWizardFromChildrenCards() {
//     function
//     return child
// }

function Dayplanner(props) {
    // An array of all tasks for the day.
    const [dailyTasks, setDailyTasks] = useState([]);
    // An array of tasks that have been promoted to "weeklies".
    const [weeklyTasks, setWeeklyTasks] = useState([]);

    // Metadata and statistics about the day.
    const [dayInformation, setDayInformation] = useState({
        dayDuration: 8 * 60, // In minutes, the duration of the day.
        startTime: new Date(), // The start time of the day, used to calculate shift finish time.
    });

    // Update values of day information whenever tasks change.
    const updateDayInformation = useEffect(() => {
        const totalTaskDuration = dailyTasks.reduce(
            (sum, task) => sum + task.duration,
            0,
        );

        setDayInformation({
            ...dayInformation,

            utilization: (
                (totalTaskDuration / dayInformation.dayDuration) *
                100
            ).toFixed(0),
        });
    }, [dailyTasks]);

    function RenderDailySummary() {
        return (
            <div className="text-left text-xl">
                <p>Viewing date: {new Date().toDateString()}.</p>
                <p>
                    {dayInformation.dayDuration / 60} hour shift starts at{" "}
                    {dayInformation.startTime.toLocaleTimeString()} and ends at{" "}
                    {DateTime.fromJSDate(dayInformation.startTime)
                        .plus({
                            minutes: dayInformation.dayDuration,
                        })
                        .toFormat("t")}
                </p>
            </div>
        );
    }

    function RenderDailyTasks() {
        // This component visualizes a day of tasks, taking into consideration the duration of the "day duration", which can be set or changed by the user.
        // TODO: Visually represent the duration of each task in relation to the day duration.

        return (
            <>
                <div
                    id="tasks-header"
                    className="flex justify-between gap-2"
                >
                    <p>
                        {dailyTasks.length} task{dailyTasks.length !== 1 && "s"}{" "}
                        for today
                    </p>
                    <p>{dayInformation.utilization}% utilization</p>
                </div>

                {dailyTasks.length === 0 ? (
                    <p className="text-darken-600">Tasks will display here.</p>
                ) : (
                    dailyTasks.map((task, index) => (
                        <RenderTask
                            key={task.uuid}
                            name={task.name}
                            duration={task.duration}
                            description={task.description}
                            creationDate={task.creationDate}
                            colour={task.colour}
                            uuid={task.uuid ? task.uuid : "No UUID!"}
                            index={index}
                        />
                    ))
                )}
            </>
        );
    }

    function RenderTaskForm() {
        // TODO: Make this pop into a floating window when the screen is wide enough.

        // name, description, creationDate, colour, uuids
        const [name, setName] = useState("");
        const [duration, setDuration] = useState(0);
        const [description, setDescription] = useState("");
        const [creationDate, setCreationDate] = useState(new Date());
        const [colour, setColour] = useState("");
        const [uuid, setUuid] = useState(uuidv4());

        return (
            <div className="flex gap-2 rounded border-none bg-lighten-800 p-2 shadow max-sm:flex-col">
                {/* NAME */}
                <input
                    type="text"
                    placeholder="Name"
                    className="rounded border-none bg-darken-50 p-1 shadow-inner"
                    onChange={(e) => setName(e.target.value)}
                />
                {/* DESCRIPTION */}
                <input
                    type="text"
                    placeholder="Description"
                    className="rounded border-none bg-darken-50 p-1 shadow-inner"
                    onChange={(e) => setDescription(e.target.value)}
                />
                {/* DURATION */}
                <select
                    className="min-w-36 rounded border-none bg-lighten-600 p-1 shadow"
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                >
                    <option value={15}>15 minutes</option>
                    <option value={30}>30 minutes</option>
                    <option value={45}>45 minutes</option>
                    <option value={60}>60 minutes</option>
                    <option value={90}>90 minutes</option>
                    <option value={120}>120 minutes</option>
                    <option value={180}>180 minutes</option>
                </select>
                {/* COLOUR */}
                <select
                    className="min-w-24 rounded border-none bg-lighten-600 p-1 shadow"
                    onChange={(e) => setColour(e.target.value)}
                >
                    <option value="bg-yellow-400">Yellow</option>
                    <option value="bg-green-400">Green</option>
                    <option value="bg-red-300">Red</option>
                    <option value="bg-blue-400">Blue</option>
                    <option value="bg-purple-500">Purple</option>
                </select>
                <button
                    className="rounded bg-lighten-600 p-1 shadow"
                    onClick={() => {
                        // Add task to dailyTasks
                        setDailyTasks([
                            ...dailyTasks,
                            {
                                name,
                                duration,
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

    const RenderTask = memo(function RenderTask({
        index,
        name,
        duration,
        description,
        creationDate,
        colour,
        uuid,
    }) {
        // TODO: Make the Task component gesture-friendly
        // - Swipe left to delete
        // - Swipe right to edit
        // - Tap to show details
        // - Long press to show options

        const [showDetails, setShowDetails] = useState(false);

        return (
            <motion.div
                initial={{ y: -10, opacity: 0.85 }}
                animate={{ y: 0, opacity: 1 }}
                className={`${colour} flex gap-6 rounded p-2 shadow`}
            >
                <div className="flex flex-col gap-2 text-darken-600">
                    <p className="text-xl">#{index + 1}</p>
                    <p className="text-left">{duration}min</p>
                </div>
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
            </motion.div>
        );
    });

    return (
        <>
            {/* <UnderContruction heading="Dayplanner is under construction." /> */}
            <div className="mt-8 flex flex-col justify-center gap-2">
                {/* TODAYS SUMMARY */}
                <RenderDailySummary />

                {/* TODAYS TASKS */}
                <div
                    id="tasks-container"
                    className="my-auto flex flex-col gap-2 rounded bg-lighten-800 p-2"
                >
                    <RenderDailyTasks />
                </div>

                {/* TASK FORM */}
                <AnimatePresence>
                    <RenderTaskForm />
                </AnimatePresence>
            </div>
        </>
    );
}

export default memo(Dayplanner);
