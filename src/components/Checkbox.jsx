export default function Checkbox(props) {
    return (
        <div>
            <label className={`${props.className} flex gap-2`}>
                <input
                    className="rounded bg-lighten-900 my-auto"
                    type="checkbox"
                    name="myCheckbox"
                    defaultChecked={props.checked}
                    checked={props.checked}
                    onChange={props.onChange}
                />
                {props.body}
            </label>
        </div>
    );
}
