import Anime from "../../components/Anime";
import AnimeDetails from "../../components/AnimeDetails";
import DetailBox from "../../components/DetailBox";
import Row from "../../components/Row";
import Title from "../../components/Title";

export default function anime({anime,related}){

    const genres = anime.data.genres.map(item => `${item.name} `);

    const themes = anime.data.themes.map(item => `${item.name} `);

    return (
        <div>
            <AnimeDetails
                title = {anime.data.title}
                englishTitle = {anime.data.title_english ? anime.data.title_english : anime.data.title }
                synopsis = {anime.data.synopsis}
                image = {anime.data.images.webp.large_image_url}
            />

            <footer style={{display: 'flex', justifyContent: 'space-between', margin: '0 40px', alignItems: 'center'}}>
                <div>
                    <Title><span>Animes</span> relacionados 🎎</Title>
                    <Row>
                        {related.data.slice(0,6).map((item, index) => (
                            <Anime
                                title = {item.entry.title}
                                image = {item.entry.images.webp.large_image_url}
                                key = {index}
                                id = {item.entry.mal_id}
                            />
                        ))}
                    </Row>
                </div>

                <DetailBox
                    genres = {genres}
                    themes = {themes}
                    episodes = {anime.data.episodes}
                    status = {anime.data.status}
                    year = {anime.data.year}
                    grade = {anime.data.score}
                    season = {anime.data.season}
                    day = {anime.data.broadcast.day}
                />

            </footer>    

        </div>
    )
}

export async function getServerSideProps(context){

    const {params} = context;

    const animeResponse = await fetch(`https://api.jikan.moe/v4/anime/${params.anime}`)
    const animeData = await animeResponse.json();

    const relatedResponse = await fetch(`https://api.jikan.moe/v4/anime/${params.anime}/recommendations`)
    const relatedData = await relatedResponse.json();
    
    return {
        props: {
            anime: animeData,
            related: relatedData,
        }
    }
}