import { Link } from "react-router-dom";

export default function ServerCard(props) {
    return (
        <>
            <div
                className={`${props.className} card h-56 w-44 overflow-hidden rounded-2xl bg-slate-50 shadow-lg transition-all hover:scale-105 hover:shadow-xl`}
            >
                <Link to={props.to}>
                    <img
                        className="h-full object-cover brightness-90 transition-all"
                        src={props.img}
                    />
                    {/* Container */}
                    <div className="z-25 borde relative -top-[95%] m-2 flex h-40 flex-col justify-center gap-2 rounded-lg drop-shadow transition-all hover:-top-full">
                        {/* Spacer */}
                        <p className="z-10 mt-4 font-header text-3xl text-lighten-900 drop-shadow">
                            {props.title}
                        </p>
                        <p className="z-10 font-header font-semibold text-lighten-800 drop-shadow">
                            {props.subtitle}
                        </p>
                        <p className="animate-pulse font-header text-lighten-800 hover:animate-none">
                            {props.announcement && props.announcement}
                        </p>
                    </div>
                </Link>
            </div>
        </>
    );
}
