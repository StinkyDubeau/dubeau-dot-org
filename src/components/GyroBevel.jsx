/* eslint-disable react/prop-types */

export default function GyroBevel({ children, className = "" }) {
    return (
        <div className="flex flex-col items-center">
            <div
                className={`gyro-bevel min-h-16 w-[calc(100vw-1rem)] max-w-xl rounded-full px-3 py-1 shadow-md transition-all sm:px-5 ${className}`}
            >
                {children}
            </div>
        </div>
    );
}
