export default function InnerCard({ children, className }) {
    return <div className={`${className} shadow-inner rounded-xl p-2`}>{children}</div>;
}
