import styled from "styled-components"

export default function Row({children}){
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    margin: 32px 0 100px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`