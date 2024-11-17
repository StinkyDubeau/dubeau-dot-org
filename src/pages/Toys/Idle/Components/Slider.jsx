export default function Slider({ min, max, value, step, onChange }) {
    return (
        <input
            type="range"
            // Send the slider value to the callback function "onChange". Usually, this is paired with a setState on the caller.
            onChange={onChange && ((e) => onChange(e.target.value))} // Optional
            min={min} // Required
            max={max} // Required
            value={value} // Required
            step={step ? step : 1} // Optional
            className="range fill-lighten-800 text-lighten-800 sm:flex-1"
        />
    );
}
