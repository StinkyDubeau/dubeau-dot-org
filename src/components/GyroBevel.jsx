/* eslint-disable react/prop-types */

export default function GyroBevel({ children }) {
    return (
        <div className="flex flex-col items-center">
            <div className="gyro-bevel min-h-16 w-[calc(100vw-1rem)] max-w-xl rounded-full px-5 py-1 shadow-md transition-all max-sm:px-4">
                {children}
            </div>
        </div>
    );
}
