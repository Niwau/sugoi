import styled from "styled-components"

export default function Title({children}){
    return (
        <Container>
            <h2>{children}</h2>
        </Container>
    )
}

const Container = styled.div`

    margin-left: 40px;

    h2 {
        font-size: 2.2rem;
        text-align: start;
    }

`