import styled from "styled-components"

export default function ButtonPrimary({children}){

    return (
        <Button>{children}</Button>
    )

}

const Button = styled.button`


    display: flex;
    align-items: center;
    gap: 5px;
    background-color: var(--primary);
    color: var(--white);
    border: none;
    padding: 16px 64px;
    border-radius: 50px;
    font-size: 1.5rem;

    :hover{
       cursor: pointer;

       img {
            fill: var(--primary);
        }
    }

`