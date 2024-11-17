export default function IntegerInput({ id, onChange, value, className }) {
    return (
        <>
            <input
                // TODO: Get scroll functionality working light Adobe integer inputs
                onScroll={(e) => console.log(e)}
                type="number"
                id={id}
                className={className}
                pattern="[0-9]{0,5}"
                onChange={(e) => onChange(Number(e.target.value))}
                value={value}
            />
        </>
    );
}
