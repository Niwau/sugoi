import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Anime from "../../../components/Anime";

export default function Home(){

    const router = useRouter();
    const animeName = router.query.anime;

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        async function getData(){
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}`);
            const data = await response.json();
            setData(data);
            setIsLoaded(true);
        }

        getData();

    }, [])


    return (
        <div>
            <h1>Mostrando resultados para {animeName}</h1>
            {isLoaded ? data.data.map((item, id) => (
                <Anime
                    title = {item.title}
                />
            )) : "Carregando..." }
        </div>
    )
}
