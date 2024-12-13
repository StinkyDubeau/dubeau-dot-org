export default function OuterCard({ children, className }) {
    return (
        <div className={`${className} rounded-2xl p-2 shadow`}>
            {children}
        </div>
    );
}
