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
            .then((response) => {
                // Success case
                setLoading(false);
                props.setData({
                    ...props.data,
                    loading: false,
                });
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                setErrorMsg(err);
                setLoading(false);
                props.setData({
                    ...props.data,
                    loading: false,
                });
                console.log(err);
            });
    }

    function handleSubmit() {
        sendEmail();
        setSubmitted(true);
        setLoading(true);
        props.setData({
            ...props.data,
            loading: { text: "Sending..." },
        });
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
                    <p>Loading...</p>
                </div>
            );
        } else {
            return (
                <div className="flex h-full flex-col justify-center">
                    <p className="font-header text-xl text-darken-700">
                        Your message was sent.
                    </p>
                </div>
            );
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
                        className="h-4 w-4 text-darken-800 opacity-70"
                    >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                        type="text"
                        className="grow bg-transparent text-darken-800"
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
                        className="h-4 w-4 text-darken-800 opacity-70"
                    >
                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                        type="text"
                        className="grow bg-transparent text-darken-800"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </label>

                <textarea
                    className="rounded-xl bg-darken-50  p-2 text-darken-800"
                    placeholder="Message (Drag bottom-right corner for more space)"
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value);
                    }}
                ></textarea>

                <button
                    className="h-10 rounded-xl bg-darken-100 font-header text-darken-600 shadow transition-all hover:rounded-lg hover:bg-darken-50"
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
