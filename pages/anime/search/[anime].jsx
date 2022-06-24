import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Anime from "../../../components/Anime";
import Main from "../../../components/Main";
import Row from "../../../components/Row";
import Title from "../../../components/Title"

export default function Home(){

    const router = useRouter();
    const animeName = router.query.anime;

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        async function getData(){
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}&sfw&order_by=popularity`);
            const data = await response.json();
            setData(data);
            setIsLoaded(true);
        }

        getData();

    }, [animeName])


    return (
        <div>
            <Main>
                <Title><h1>Mostrando resultados para: <span>{animeName}</span></h1></Title>
                <Row>
                    {isLoaded && data.data.map((item, index) => (
                        <Anime
                            key = {index}
                            title = {item.title}
                            id = {item.mal_id}
                            image = {item.images.webp.large_image_url}
                        />
                    ))}
                </Row>
            </Main>
        </div>
    )
}
