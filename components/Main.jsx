import styled from "styled-components"

export default function Main({children}){
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.main`
    display: flex;
    justify-content: center;
`