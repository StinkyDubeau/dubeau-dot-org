import Frame from "../components/Frame";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Input from "../components/Input";

export default function (props) {
    const [canSubmit, setCanSubmit] = useState(false);

    const [from_name, setFrom_name] = useState("dubeau.org");
    const [subject, setSubject] = useState("Dubeau.org contact form message")
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [body, setBody] = useState({});


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

    return (
        <>
            <Frame noNavbar vignette>
                <div className="w-screen">
                    {/* Logo */}
                    <div className="flex h-12 justify-center">
                        <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc645e37ea0b1a348/6183051594e50d5a63800f45/gs-logo.png" />
                    </div>
                    <div className="m-5">
                        <p className="font-header text-5xl text-lighten-800 sm:text-left">
                            Vehicle Checkout
                        </p>
                    </div>

                    {/* Gradient bg */}
                    <div className="m-5 flex animate-gradient-x justify-center rounded-lg bg-gradient-to-tl from-orange-600 via-orange-500 to-yellow-500 p-4 sm:gap-8">
                        <div className="flex flex-wrap justify-around gap-6 lg:gap-48">
                            <div className="flex w-72 flex-col">
                                <p className="font-header text-5xl text-zinc-800">
                                    Contact
                                </p>
                                <p className="font-header">
                                    or report moderation issues
                                </p>
                            </div>

                            <div className="w-72 rounded-xl bg-orange-50 p-4 shadow-xl">
                                <Input text="More info" />
                                <input type="checkbox" class="toggle" />
                            </div>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </Frame>
            <div className="fixed bottom-0 left-0 z-50 m-0 h-16 w-screen min-w-36 bg-center sm:left-1.5 sm:top-1 sm:w-auto">
                <div className="rounded-xl bg-white">
                    <div className="flex h-16 justify-center gap-2 p-1">
                        <div className="my-auto">
                            <p className="bg-red-500 text-xl">
                                Complete all fields before submitting
                            </p>
                        </div>
                        <button className="rounded-xl bg-darken-100 p-4">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
