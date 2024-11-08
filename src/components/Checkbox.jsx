export default function Checkbox(props) {
    return (
        <div>
            <label className={`${props.className}`}>
                {props.body}
                <input
                    type="checkbox"
                    name="myCheckbox"
                    defaultChecked={props.checked}
                    checked={props.checked}
                    onChange={props.onChange}
                />
            </label>
        </div>
    );
}
