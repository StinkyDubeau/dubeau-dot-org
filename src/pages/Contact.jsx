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
                    <div className="animate-gradient-x m-5 flex flex-wrap justify-center gap-4 rounded-lg bg-gradient-to-tr from-red-300 via-yellow-200 to-purple-200 p-4 sm:gap-8">
                        <PasswordField/>
                    </div>
                </div>
            </Frame>
        </>
    );
}
