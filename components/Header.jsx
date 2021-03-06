import React from "react"
import {useRouter} from "next/router"
import styled from "styled-components"
import Image from "next/image"
import search_icon from "../public/search.svg"

export default function Header(){

    const [data, setData] = React.useState("")

    const router = useRouter();

    const Search = (event) => {

        if(event.key == 'Enter'){
            router.push(`/anime/search/${document.getElementById('search-input').value}`)
        }

    }

    return (
        <Container>
            <div>
                <input id = 'search-input' onKeyPress={Search} type={"text"}/>
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