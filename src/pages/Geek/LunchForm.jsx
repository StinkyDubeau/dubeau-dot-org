import { useState } from "react";
import ReactLoading from "react-loading";

export default function LunchForm(props) {
    const [from_name, setFrom_name] = useState("Agent Jake Toolkit (AJT)");
    const [subject, setSubject] = useState("Geek Squad Lunches for:");
    const [lunches, setLunches] = useState(props.lunches);
    // const [username, setUsername] = useState();
    // const [email, setEmail] = useState();
    // const [body, setBody] = useState();

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
                    from: lunches.name || "",
                    email: lunches.ntlogin || "",
                    body: JSON.stringify(lunches),
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
                    <p className="font-header text-darken-700">
                        Your message was sent.
                    </p>
                </div>
            );
        }
    }

    function createForm() {
        return (
            <button
                className={`h-12 w-full rounded-2xl bg-orange-600 font-header text-sm font-bold text-lighten-900 shadow-lg transition-all hover:bg-orange-700`}
                onClick={handleSubmit}
            >
                Submit
            </button>
        );
    }

    return (
        <div className="w-full">
            {!submitted ? createForm() : createResult()}
        </div>
    );
}
