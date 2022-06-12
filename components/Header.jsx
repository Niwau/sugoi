import styled from "styled-components"
import Image from "next/image"
import search_icon from "../public/search.svg"

export default function Header(){

    return (
        <Container>
            <div>
                <input type="text"/>
                <Image src={search_icon}/>
            </div>
        </Container>
    )
}

const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 0;

    input {
        border: none;
        border-bottom: 1px solid var(--black);
        background: none;
        outline: none;
        width: 350px;
    }
`