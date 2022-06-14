import Link from "next/link"
import styled from "styled-components"

export default function Showcase({id, src}){
    return (
        <Link href={`/${id}`} >
            <a>
                <Img src = {src}/>
            </a>
        </Link>
    )
}

const Img = styled.img`
    height: 300px;
    transition: 0.2s ease-in-out;

    :hover {
        transform: translateY(-15px);
        box-shadow: 0 5px 5px rgba(0,0,0,0.1)
    }

`