import styled from "styled-components"

export default function Row({children}){
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    margin: 16px 0 0 0;
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;

`