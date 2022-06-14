import Image from "next/image";
import Blockquote from "../components/Blockquote";
import ButtonPrimary from "../components/ButtonPrimary";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Row from "../components/Row";
import Showcase from "../components/Showcase";
import Trend from "../components/Trend";
import Arrow from "../public/arrow-down.svg"
import Title from "../components/Title";
import Anime from "../components/Anime";

export default function Home({seasonNow, trending, upcoming, famous}){
  
  return (
    <div>
      <Hero>
        <Blockquote 
          title={<h1><span>Explore</span>, Descubra, Curta</h1>} 
          subtitle="Está precisando de animes para assistir ? Aqui você encontrará os animes que estão bombando no momento e muito mais!"
        />
        <ButtonPrimary>
          Explorar
          <Image style={{transform: 'scale(0.9)'}} src={Arrow}/>
        </ButtonPrimary>

        <Row>
          {seasonNow.data.slice(0,6).map((item, index) => (
            <Showcase
              src={item.images.webp.large_image_url}
              id={item.mal_id}
              key={index}
            />
          ))}
        </Row>
      </Hero>

      <Main>
        <Blockquote
          title = {<h1>Animes <span>em alta</span> 🔥</h1>}
          subtitle = "Veja os top 3 animes da temporada atual que estão fazendo sucesso!"
        />

        {trending.data.slice(0,3).map((item, index) => (
          <Trend
          id = {item.mal_id}
          key = {index}
          image = {item.images.webp.large_image_url}
          name = {item.title}
          englishName = {item.title_english}
          synopsis = {item.synopsis}
          />
        ))}

        <section style={{width: '100%'}}>
          <Title>Temporada <span>atual</span></Title>
          <Row>
            {seasonNow.data.slice(0,8).map((item, index) => (
              <Anime
                id = {item.mal_id}
                key = {index}
                image = {item.images.webp.large_image_url}
                title = {item.title}
              />
            ))}
          </Row>

          <Title>Em <span>breve</span></Title>
          <Row>
            {upcoming.data.slice(0,8).map((item, index) => (
              <Anime
                id = {item.mal_id}
                key = {index}
                image = {item.images.webp.large_image_url}
                title = {item.title}
              />
            ))}
          </Row>

          <Title>Mais <span>famosos</span></Title>
          <Row>
            {famous.data.slice(0,8).map((item, index) => (
              <Anime
                id = {item.mal_id}
                key = {index}
                image = {item.images.webp.large_image_url}
                title = {item.title}
              />
            ))}
          </Row>
        </section>
      </Main>
    </div>

  )
}

export async function getServerSideProps(){

  const responseSeasonNow = await fetch("https://api.jikan.moe/v4/seasons/now");
  const seasonNow = await responseSeasonNow.json();

  const responseTrending = await fetch("https://api.jikan.moe/v4/top/anime?filter=airing");
  const trending = await responseTrending.json();

  const responseUpcoming = await fetch("https://api.jikan.moe/v4/seasons/upcoming");
  const upcoming = await responseUpcoming.json();

  const responseFamous = await fetch("https://api.jikan.moe/v4/top/anime?filter=bypopularity");
  const famous = await responseFamous.json();

  return {
    props: {
      seasonNow: seasonNow,
      trending: trending,
      upcoming: upcoming,
      famous: famous,
    }
  }

}