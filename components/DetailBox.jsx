import styled from "styled-components"

export default function DetailBox({genres, episodes, status, year, grade, season, day, themes}){
    return (
        <Container>
           <div>
             <p>Informações adicionais</p>
           </div>
            <p><b>Gêneros:</b> {genres}</p>
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

    div {
        text-align: center;
        margin-bottom: 20px;
    }

    border: 2px solid var(--primary);
    height: fit-content;
    padding: 20px 40px;
    min-width: 300px;
    border-radius: 25px;
`