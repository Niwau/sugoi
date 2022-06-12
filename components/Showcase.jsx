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
`