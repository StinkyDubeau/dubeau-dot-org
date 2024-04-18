import Frame from "../components/Frame";
import { useState, useEffect } from "react";

const astros = [
    {
        image: "https://cdn.discordapp.com/attachments/937152144170164286/1222245255961645236/IMG_4819.jpg?ex=66313319&is=661ebe19&hm=a09bfe70fefa7bcdcc88f9e6a3e8569cab55cb188b76d605fc382379eddd9a71&",
        description:
            "This is a text description that will be from 100 to 200 words of the astro.",
        title: "Astro in the woods",
    },
    {
        image: "https://media.discordapp.net/attachments/937152144170164286/1221462776636248118/IMG_4796.jpg?ex=662e5a5b&is=661be55b&hm=89b0c6bf836d4ad79550dd519d21ca6913213b6cf6a3d247a843c72c191d286c&=&format=webp&width=265&height=354",
        description:
            "This is a text description that will be from 100 to 200 words of the astro.",
        title: "Astro approach",
    },
    {
        image: "https://media.discordapp.net/attachments/937152144170164286/1218726850948370452/IMG_6605.png?ex=662da0d4&is=661b2bd4&hm=25fca5c4f629fdc74b93f36dbbc326a25d6b8be3d2d36e7d55023635438117cd&=&format=webp&quality=lossless&width=162&height=350",
        description:
            "This is a text description that will be from 100 to 200 words of the astro.",
        title: "Google maps astro",
    },
];

export default function Astros(props) {
    const [astros, setAstros] = useState([]);
    const [astro, setAstro] = useState(null);

    function createModal(astro) {
        return (
            <div
                key={astro.key}
                onClick={() => {
                    setAstro(astros[index]);
                }}
                className="drop-shadow-lg sm:w-36"
            >
                <div className="my-1 flex justify-end">
                    <button
                        className="h-6 w-6 rounded-full bg-lighten-600 text-darken-600 transition-all hover:bg-red-500 hover:text-lighten-800"
                        onClick={() => setAstro(null)}
                    >
                        X
                    </button>
                </div>
                <img
                    src={astro.image}
                    alt={astro.title}
                    className="rounded-lg object-contain"
                />
                <p className="text-darken-800">{astro.title}</p>
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
                    className="h-full w-full object-cover"
                />
                {astro.title && (
                    <div className="z-5 flex h-fit flex-col justify-center overflow-hidden">
                        <p className="text-darken-800">{astro.title}</p>
                    </div>
                )}
            </div>
        );
    }

    useEffect(() => {
        fetch("http://localhost:3000/astros", {
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
    return (
        <Frame>
            <div className="sm:w-[720px] sm:bg-orange-300 lg:w-[1280px] lg:bg-blue-300">
                <p className="my-5 text-left font-header text-5xl text-darken-800">
                    Astros
                </p>
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
