import Link from "next/link"
import styled from "styled-components"

export default function Anime({image, title, id}){
    return (
        <Container>
           <Link href={`/anime/${id}`} >
             <a>
                 <img src={image}/>
             </a>
           </Link>
            <p>{title}</p>
        </Container>
    )
}

const Container = styled.div`

    width: min-content;
    text-align: center;
    flex: 1 1 auto;

    img {
        width: 20rem;
        object-fit: cover;
        transition: 0.2s ease-in-out;

        :hover {
            transform: translateY(-15px);
            box-shadow: 0 5px 5px rgba(0,0,0,0.1)
        }
    }



`