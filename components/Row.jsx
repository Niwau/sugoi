import styled from "styled-components"

export default function Row({children}){
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    margin: 16px 40px;
    display: flex;
    gap: 12px;
    justify-content: space-between;
    flex-wrap: wrap;

`