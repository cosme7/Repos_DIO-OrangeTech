import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;

    h3 {
        font-size: clamp(2rem, 2.2vw, 2.5rem);
        color: var(--clr-light);
    }

    p {
        margin-block: clamp(0.4rem, 0.6vw, 0.75rem);
        font-size: clamp(1rem, 1.2vw, 1.4rem);
        color: var(--clr-light);
        opacity: 0.6;
    }

    hr {
        margin-top: 1rem;
        color: var(--clr-light);
        opacity: 0.8;
    }
`;

export const BtnBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    button:nth-child(1){
        padding: .2em 1em;
        border-radius: 5px;
        background-color: crimson;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    button:nth-child(1):where(:hover, :focus-visible){
        transform: scale(0.9);
    }

    a{
        color: var(--clr-light);
        font-weight: var(--fw-700);
        text-decoration: none;
    }

    button:nth-child(2){
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`;