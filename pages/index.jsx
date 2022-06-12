import Image from "next/image";
import Blockquote from "../components/Blockquote";
import ButtonPrimary from "../components/ButtonPrimary";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Row from "../components/Row";
import Showcase from "../components/Showcase";
import Arrow from "../public/arrow-down.svg"

export default function Home({seasonNow}){
  
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
      </Main>

    </div>
    


  )
}

export async function getStaticProps(){

  const response = await fetch("https://api.jikan.moe/v4/seasons/now");
  const data = await response.json();
  
  return {
    props: {
      seasonNow: data,
    }
  }

}