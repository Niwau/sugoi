import styled from "styled-components"

export default function Anime({image, title}){
    return (
        <Container>
            <img src={image}/>
            <p>{title}</p>
        </Container>
    )
}

const Container = styled.div`

    width: min-content;
    text-align: center;

    img {
        height: 250px;
    }
`