import Frame from "../components/Frame";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";

export default function (props) {
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
                                <p>Test</p>
                            </div>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </Frame>
        </>
    );
}
