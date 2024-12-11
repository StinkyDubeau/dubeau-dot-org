export default function OuterCard({ children, className }) {
    return <div className={`${className} shadow rounded-2xl p-2`}>{children}</div>;
}
