import { useState } from "react";
import ReactLoading from "react-loading";

export default function ContactForm(props) {
    const [from_name, setFrom_name] = useState("dubeau.org");
    const [subject, setSubject] = useState("Dubeau.org contact form message");
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [body, setBody] = useState();

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

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

    function handleSubmit() {
        sendEmail();
        setSubmitted(true);
        setLoading(true);
    }

    function createResult() {
        if (errorMsg) {
            return (
                <div className="flex flex-col gap-2">
                    <p className="font-header text-xl">Error</p>
                    <p className="font-sansui max-w-xs rounded-lg bg-red-300 p-1 shadow-inner">
                        {errorMsg.message}
                    </p>
                    <button
                        className="h-10 rounded-lg bg-darken-100 shadow transition-all hover:rounded-lg hover:bg-darken-50"
                        onClick={() => {
                            setSubmitted(false);
                            setErrorMsg(null);
                        }}
                    >
                        Try again
                    </button>
                </div>
            );
        } else if (loading) {
            return (
                <div>
                    <ReactLoading color="darkgray" />
                    <p>Loading...</p>
                </div>
            );
        } else {
            return <p>Success!</p>;
        }
    }

    function createForm() {
        return (
            <div className="flex flex-col gap-2 ">
                <label className="flex items-center gap-2 rounded-xl bg-darken-50 p-2 shadow-inner">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70"
                    >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                        type="text"
                        className="grow bg-transparent"
                        placeholder="Name"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </label>

                <label className="flex items-center gap-2 rounded-xl bg-darken-50 p-2 shadow-inner">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70"
                    >
                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                        type="text"
                        className="grow bg-transparent"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </label>

                <textarea
                    className="rounded-xl bg-darken-50  p-2"
                    placeholder="Message"
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value);
                    }}
                ></textarea>

                <button
                    className="h-10 rounded-xl bg-darken-100 shadow transition-all hover:rounded-lg hover:bg-darken-50"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        );
    }

    return (
        <div className="w-72 rounded-xl bg-orange-50 p-4 shadow-xl">
            {!submitted ? createForm() : createResult()}
        </div>
    );
}
