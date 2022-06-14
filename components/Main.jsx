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
    align-items: center;
    flex-direction: column;
`