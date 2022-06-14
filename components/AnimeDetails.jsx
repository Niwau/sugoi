import styled from "styled-components"

export default function AnimeDetails({title, englishTitle, synopsis, image}){
    return (
        <Container>
            <main>
                <h1>{title}</h1>
                <h3>{englishTitle}</h3>
                <p>{synopsis}</p>
            </main>
            <aside>
                <img src={image}/>
            </aside>
        </Container>
    )
}

const Container = styled.div`

    display: flex;
    justify-content: center;
    gap: 50px;
    margin: 50px 40px;

    p {
        max-height: 350px;
        min-width: 450px;
        overflow: auto;
    }

    img {
        height: 45rem;
    }

`