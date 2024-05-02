import Avvvatars from "avvvatars-react";

export default function Avatar(props) {
    return (
        <div className="flex h-10 w-[50px] flex-col justify-center overflow-hidden rounded-full">
            <Avvvatars value={props.nick && props.nick} style="shape" size={40} />
        </div>
    );
}
