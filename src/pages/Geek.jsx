import Frame from "../components/Frame";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Input from "../components/Input";
import Card from "../components/Card";

export default function (props) {
    const [canSubmit, setCanSubmit] = useState(false);

    const [from_name, setFrom_name] = useState("dubeau.org");
    const [subject, setSubject] = useState("Dubeau.org contact form message");
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [body, setBody] = useState({});

    const stores = ["928", "940", "627"];
    const vans = ["22", "91", "137", "163", "427", "449"];
    const questions = [
        "Mirrors are adequately adjusted",
        "Brake lights, headlights, and taillights are all working",
        "Tires are in good condition, with adequate tread and correct pressure",
        "Turn-signals are working",
        "Registration and insurance papers are in the glovebox: VIN numbers match",
        "Windshield wiper blades are in good, working condition",
        "You have a valid drivers license on your person",
        "Emergency brake is working",
        "Horn is working",
        "Windshield is not cracked",
    ];

    const [store, setStore] = useState(stores[0]);
    const [van, setVan] = useState(vans[0]);

    function sendEmail() {
        fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            body: JSON.stringify({
                service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
                template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                user_id: import.meta.env.VITE_EMAILJS_USER_ID,
                accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
                template_params: {
                    subject: subject,
                    from_name: from_name,
                    username: username,
                    email: email,
                    body: body,
                    reply_to: "This is the reply=tp",
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                setErrorMsg(err);
                setLoading(false);
                console.log(err);
            });
    }

    function createQuestions(question, index) {
        return (
            <label
                key={index}
                className="{index % 2  === 0 && 'bg-slate-200`} label cursor-pointer text-left"
            >
                <span className="label-text text-darken-800">{question}</span>
                <input
                    type="checkbox"
                    // checked={showOld && "checked"}
                    // onChange={(e) =>
                    //     showOld
                    //         ? setShowOld(
                    //               !e.target.value,
                    //           )
                    //         : setShowOld(e.target.value)
                    // }
                    className="checkbox"
                />
            </label>
        );
    }

    return (
        <>
            <Frame noNavbar vignette>
                <div className="w-screen">
                    {/* Logo */}
                    <div className="flex h-16 justify-center">
                        <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc645e37ea0b1a348/6183051594e50d5a63800f45/gs-logo.png" />
                    </div>
                    <div className="m-5">
                        <p className="font-header text-5xl text-lighten-900 sm:text-left">
                            Vehicle Checkout
                        </p>
                    </div>

                    {/* Gradient bg */}
                    <div className="m-5 flex animate-gradient-x justify-center rounded-lg bg-gradient-to-tl from-orange-600 via-orange-500 to-yellow-500 p-4 sm:gap-8">
                        <div className="flex flex-wrap justify-around gap-4 lg:gap-48">
                            <div className="flex w-72 flex-col">
                                <p className="font-header text-5xl text-zinc-800">
                                    Checklist
                                </p>
                                {/* <p className="font-header text-darken-800">
                                    or report moderation issues
                                </p> */}
                            </div>

                            <div className="w-72 rounded-xl bg-orange-50 p-4 shadow-xl">
                                {questions.map(createQuestions)}
                            </div>
                        </div>
                    </div>
                </div>
                <Card
                    title="Title 1"
                    subtitle="Subtitle 1"
                    image="https://example.com/image1.jpg"
                />
                <Card
                    title="Title 2"
                    subtitle="Subtitle 2"
                    image="https://example.com/image2.jpg"
                />
                {/* Add more cards as needed */}
            </Frame>
            <div className="fixed bottom-0 left-0 z-50 m-0 h-16 w-screen min-w-36 bg-center sm:left-1.5 sm:top-1 sm:w-auto">
                <div className="navbar bg-lighten-700 backdrop-blur-lg max-sm:rounded-t-xl sm:rounded-xl">
                    <div className="flex-1 px-2 lg:flex-none">
                        <a className="text-lg font-bold">
                            Inspection checklist
                        </a>
                    </div>
                    <div className="flex flex-1 justify-end px-2">
                        <div className="flex items-stretch">
                            <a className="btn btn-ghost rounded-btn">Button</a>
                            <div className="dropdown dropdown-end dropdown-top">
                                <div tabIndex={0} role="button" className="btn">
                                    <p>
                                        Store:{" "}
                                        <span className="underline">
                                            {store}
                                        </span>
                                    </p>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
                                >
                                    {stores.map((store, index) => {
                                        return (
                                            <li
                                                key={index}
                                                onClick={() =>
                                                    setStore(store.toString())
                                                }
                                            >
                                                <a>{store}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
