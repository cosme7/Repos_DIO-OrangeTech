import styled from "styled-components";

export const ButtonContainer = styled.button`
    width: 80%;
    padding-block: 0.5em;
    border-radius: 20px;

    font-size: clamp(1rem, 1.2vw, 1.5rem);
    font-weight: var(--fw-700);

    border: 1px solid var(--bg-light);
    background-color: var(--bg-light);
    color: var(--clr-dark);

    cursor: pointer;
    transition: all 0.4s ease-in-out;
    
    &:where(:hover, :focus-visible){
        transform: scale(0.95);
    }
`;