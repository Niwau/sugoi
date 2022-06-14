import Image from "next/image"

import styled from "styled-components"

export default function Footer(){
    return (
        <Container>
            <p>Feito com ❤ por Niwau</p>
            <a target = "blank" href="https://github.com/Niwau"><Image width={'30px'} height={'30px'} src="/github.svg"/></a>
        </Container>
    )
}

const Container = styled.div`

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 40px;
    margin-top: 40px;
    gap: 30px;

    background-color: var(--primary);
    p {
        color: white;
    }

    img {
        width: 4rem;
    }
`