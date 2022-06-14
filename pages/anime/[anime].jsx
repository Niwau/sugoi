import AnimeDetails from "../../components/AnimeDetails";

export default function anime({anime}){
    return (
        <div>
            <AnimeDetails
                title = {anime.data.title}
                englishTitle = {anime.data.english_title ? anime.data.english_title : anime.data.title }
                synopsis = {anime.data.synopsis}
                image = {anime.data.images.webp.large_image_url}
            />
        </div>
    )
}

export async function getServerSideProps(context){

    const {params} = context;

    const response = await fetch(`https://api.jikan.moe/v4/anime/${params.anime}`)
    const data = await response.json();

    return {
        props: {
            anime: data,
        }
    }
}