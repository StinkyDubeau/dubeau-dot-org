export default function InnerCard({ children, className }) {
    return (
        <div className={`${className} rounded-xl p-2 shadow-inner`}>
            {children}
        </div>
    );
}
