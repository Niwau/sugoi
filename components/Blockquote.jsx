import styled from "styled-components"

export default function Blockquote({title, subtitle}){
    
    return (
        <Container>
            {title}
            <h4>{subtitle}</h4>
        </Container>
    )
}

const Container = styled.div`

    margin-top: 100px;
    text-align: center;
    max-width: 600px;
    margin-bottom: 64px;
`

