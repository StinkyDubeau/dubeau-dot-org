import Frame from "../components/Frame";
import PasswordField from "../components/PasswordField";

export default function (props) {
    return (
        <>
            <Frame>
                <div className="w-screen">
                    <div className="m-5">
                        <p className="text-left font-regular text-xl">
                            Get in touch
                        </p>
                    </div>
                    {/* Gradient bg */}
                    <div className="animate-gradient-x m-5 flex justify-center rounded-lg bg-gradient-to-tr from-red-300 via-yellow-200 to-purple-200 p-4 sm:gap-8">
                        <div className="flex flex-wrap lg:gap-48 gap-6 justify-around">
                            <div>
                                <p className="font-header max-w-48 text-left text-5xl text-zinc-800">
                                    Contact
                                </p>
                                <p className="font-header">or report moderation issues</p>
                            </div>
                            <PasswordField />
                        </div>
                    </div>
                </div>
            </Frame>
        </>
    );
}
