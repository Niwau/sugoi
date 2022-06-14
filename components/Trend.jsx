import Link from "next/link";
import styled from "styled-components";
import ButtonSeconday from "./ButtonSecondary";

export default function Trend({image, englishName, name, synopsis, id }){
    return (
        <Container>
            <aside>
                <img src={image}/>
                <Link href={`/anime/${id}`}><a><ButtonSeconday>Mais detalhes</ButtonSeconday></a></Link>
            </aside>
            <main>
                <h2>{name}</h2>
                <h3>{englishName ? englishName : name}</h3>
                <p>{synopsis}</p>
            </main>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    gap: 20px;
    margin: 20px 40px;

    aside {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    p {
        margin-top: 10px;
        max-height: 300px;
        min-width: 450px;
        overflow: auto;
    }

    img {
        height: 400px;
        border-radius: 15px;
    }

`