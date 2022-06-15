import styled from "styled-components"

export default function DetailBox({genres, episodes, status, year, grade, season, day, themes}){
    return (
        <Container>
            <p>Informações adicionais</p>
            <p><b>Gêneros:</b>  </p>
            <p><b>Episódios:</b> {episodes}</p>
            <p><b>Status:</b> {status}</p>
            <p><b>Ano:</b> {year}</p>
            <p><b>Nota:</b> {grade}</p>
            <p><b>Temporada:</b> {season}</p>
            <p><b>Dia de lançamento:</b> {day}</p>
            <p><b>Temas:</b> {themes}</p>
        </Container>
    )
}

const Container = styled.div`
    border: 2px solid var(--primary);
    height: fit-content;
    padding: 40px;
    min-width: 300px;
`