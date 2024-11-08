export default function Checkbox(props) {
    return (
        <div>
            <label className={`${props.className}`}>
                {props.body}
                <input
                    type="checkbox"
                    name="myCheckbox"
                    defaultChecked={true}
                />
            </label>
        </div>
    );
}
