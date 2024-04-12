import { Link } from "react-router-dom";

export default function ServerCard(props) {
    return (
        <>
            <div className="card h-44 w-36 overflow-hidden rounded-xl bg-slate-50 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                <Link to={props.to}>
                    <img className="object-cover h-full" src={props.img} />
                    <div className="relative top-[-60%]">
                        <p className="font-headerScript text-3xl text-white">
                            {props.title}
                        </p>
                        <p className="text-white font-header">
                            {props.subtitle}
                        </p>
                    </div>
                </Link>
            </div>
        </>
    );
}
