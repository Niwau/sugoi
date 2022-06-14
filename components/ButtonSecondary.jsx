import styled from "styled-components"

export default function ButtonSecondary({children}){

    return (
        <Button>{children}</Button>
    )

}

const Button = styled.button`


    display: flex;
    align-items: center;
    gap: 5px;
    background: none;
    color: var(--primary);
    border: 2px solid var(--primary);
    padding: 16px 64px;
    border-radius: 15px;
    font-size: 1.5rem;
    font-weight: 500;
    transition: 0.2s;

    :hover{
       cursor: pointer;
       background-color: var(--primary);
       color: white;
    }

`