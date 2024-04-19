import Frame from "../components/Frame";
import { useState, useEffect } from "react";

const astros = [];
const url = import.meta.env.VITE_ASTRO_API;

export default function Astros(props) {
    const [astros, setAstros] = useState([]);
    const [astro, setAstro] = useState(null);
    const [description, setDescription] = useState(null);

    function createModal(astro) {
        return (
            <div className="drop-shadow-lg">
                <img
                    src={astro.image}
                    alt={astro.title}
                    className="rounded-lg object-contain"
                />
                {astro.title && (
                    <p className="text-3xl italic text-darken-800">
                        "{astro.title}"
                    </p>
                )}
                <p className="text-darken-800">
                    Captured by @
                    <span className="underline">{astro.photographer}</span> on{" "}
                    {new Date(astro.timestamp).toDateString()}
                </p>
            </div>
        );
    }

    function createCard(astro, index) {
        return (
            <div
                key={astro.key}
                onClick={() => {
                    setAstro(astros[index]);
                }}
                className="w-36 overflow-clip rounded-lg bg-lighten-800 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
                <img
                    src={astro.image}
                    alt={astro.title}
                    className="z-1 h-56 w-full object-cover"
                />
                <div className="">
                    {astro.title ? (
                        <p className="text-darken-800">{astro.title}</p>
                    ) : (
                        <p className="font-thin italic text-darken-800">
                            {new Date(astro.timestamp).toDateString()}
                        </p>
                    )}
                </div>
            </div>
        );
    }

    // Discord scraper
    useEffect(() => {
        fetch(`${url}/astros`, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setAstros(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    // Astro describer
    useEffect(() => {
        if (astro) {
            fetch(`${url}/ask`, {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(astro),
            })
                .then((response) => response.json())
                .then((data) => {
                    setDescription(data.message.content);
                    console.log(`Raw received: ${data}`);
                    console.log(`Filtered: ${description}`);
                })
                .catch((error) => console.log(error));
        }
    }, [astro]);

    return (
        <Frame>
            <div className="">
                <div className="flex justify-between">
                    <p
                        className="mb-3 font-header text-5xl text-darken-800 sm:text-left"
                        onClick={() => setAstro(null)}
                    >
                        Astros
                    </p>
                    {astro && (
                        <button
                            className="my-1 rounded-xl bg-lighten-600 p-2 font-header text-2xl text-darken-600 transition-all hover:bg-red-500 hover:text-lighten-800"
                            onClick={() => setAstro(null)}
                        >
                            Back to Gallery
                        </button>
                    )}
                </div>
                {astro ? (
                    createModal(astro)
                ) : (
                    <div className="flex flex-wrap justify-around gap-3">
                        {astros.map(createCard)}
                    </div>
                )}
            </div>
        </Frame>
    );
}
