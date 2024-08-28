export default function BlogPost(props) {
    return (
        <>
            <div className="rounded-xl bg-lighten-800 p-4 text-left font-header font-light text-darken-800 max-w-screen-md">
                <p className="text-2xl font-normal">{props.title}</p>
                <p className="text-xl mb-4">by <span className="font-normal">{props.author}</span> on {props.date}</p>

                <p className="">{props.body}</p>

                <p className="text-darken-300 mt-4 font-normal">{props.id}</p>
            </div>
        </>
    );
}
