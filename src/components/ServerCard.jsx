import { Link } from "react-router-dom";

export default function ServerCard(props) {
    return (
        <>
            <div className="card h-44 w-36 overflow-hidden rounded-xl bg-slate-50 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                <Link to={props.to}>
                    <img className="h-full object-cover" src={props.img} />
                    {/* Container */}
                    <div className="relative top-[-100%] m-2 h-40 rounded-lg border-white transition-all ">
                        {/* Spacer */}
                        <div className="h-12" />
                        <p className="font-headerScript text-3xl text-white drop-shadow">
                            {props.title}
                        </p>
                        <p className="font-header text-white drop-shadow">
                            {props.subtitle}
                        </p>
                    </div>
                </Link>
            </div>
        </>
    );
}
