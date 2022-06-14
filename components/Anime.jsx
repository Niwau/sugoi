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
        height: 25rem;
        width: 18rem;
        object-fit: fill;
        transition: 0.2s ease-in-out;

        :hover {
            transform: translateY(-15px);
            box-shadow: 0 5px 5px rgba(0,0,0,0.1)
        }
    }



`