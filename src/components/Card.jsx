import { useState } from "react";

const Card = ({ title, subtitle, image }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="mx-auto rounded-lg bg-white p-4 shadow">
            <div className="flex flex-col gap-4 md:flex-row">
                <img
                    src={image}
                    alt={`Card Image - ${title}`}
                    className="max-w-full 
  rounded-lg object-cover shadow"
                />
                {/* Toggle switch (button) */}
                <div className="mt-6 md:mt-0">
                    <label
                        htmlFor="favoriteSwitch"
                        className="flex cursor-pointer items-center justify-between"
                    >
                        <span>Favorite</span>
                        <input
                            type="checkbox"
                            id="favoriteSwitch"
                            checked={isFavorite}
                            onChange={() => setIsFavorite(!isFavorite)}
                        />
                    </label>
                </div>
                {/* Comment button */}
                <button
                    className="mt-4 rounded bg-gray-800 px-4 py-2 font-bold text-white 
  md:mt-0"
                >
                    Comments
                </button>
            </div>
        </div>
    );
};

export default Card;
