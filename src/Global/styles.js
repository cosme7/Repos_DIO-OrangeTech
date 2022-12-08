import  { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root{
        --fw-700: 700;
        /*  */
        --bg-dark: #22272e;
        --bg-light: #FFFFFF;
         /*  */
         --clr-light: #FFFFFF;
         --clr-dark: #000000;
         /*  */
    }

    body {
        background-color: var(--bg-dark);
        color: var(--bg-light);
    }
`;