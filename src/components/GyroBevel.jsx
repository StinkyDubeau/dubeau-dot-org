/* eslint-disable react/prop-types */

export default function GyroBevel({ children }) {
    return (
        <div className="flex flex-col items-center">
            <div className="gyro-bevel min-h-16 rounded-full p-0.5 shadow-md">
                <div className="gyro-bevel-surface h-full rounded-full px-6 transition-all hover:px-0 max-sm:px-2">
                    {children}
                </div>
            </div>
        </div>
    );
}
