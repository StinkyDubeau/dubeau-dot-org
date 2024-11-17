export default function Slider({ min, max, value, step, onChange }) {
    return (
        <input
            type="range"
            onChange={(e) => onChange(e.target.value)}
            min={min}
            max={max}
            value={value}
            step={step ? step : 1} // Move 1 unit per pixel unless otherwise specified
            className="range fill-lighten-800 text-lighten-800 sm:flex-1"
        />
    );
}
