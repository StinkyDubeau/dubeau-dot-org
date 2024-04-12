import Frame from "../components/Frame";
import PasswordField from "../components/PasswordField";

export default function (props) {
    return (
        <>
            <Frame>
                <div className="w-screen">
                    <div className="m-5">
                        <p className="text-left font-header text-5xl text-darken-800">
                            Get in touch
                        </p>
                        {/* <p className="text-left font-regular text-xl">
                            Subtitle
                        </p> */}
                    </div>
                    {/* Gradient bg */}
                    <div className="animate-gradient-x m-5 flex justify-center rounded-lg bg-gradient-to-tr from-red-300 via-yellow-200 to-purple-200 p-4 sm:gap-8">
                        <div className="flex flex-wrap justify-around gap-6 lg:gap-48">
                            <div>
                                <p className="max-w-48 text-left font-header text-5xl text-zinc-800">
                                    Contact
                                </p>
                                <p className="font-header">
                                    or report moderation issues
                                </p>
                            </div>
                            <PasswordField />
                        </div>
                    </div>
                    <div className="animate-gradient-x m-5 flex justify-center rounded-lg bg-gradient-to-tl from-purple-300 via-yellow-200 to-purple-200 p-4 sm:gap-8">
                        <div className="flex flex-wrap justify-around gap-6 lg:gap-48">
                            <div>
                                <p className="max-w-48 text-left font-header text-5xl text-zinc-800">
                                    Join
                                </p>
                                <p className="font-header">social channels</p>
                            </div>
                            <PasswordField />
                        </div>
                    </div>
                </div>
            </Frame>
        </>
    );
}
