import {createGlobalStyle} from "styled-components";
import {theme} from "./theme";

export default createGlobalStyle`
    * {
        box-sizing: border-box;

        margin: 0;
        padding: 0;

        color: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
        font-family: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html,
    body {
        width: 100%;
        min-height: 100vh;

        display: flex;
        
        color: ${theme.color.white};
        background: ${theme.color.black};
    }

    #root {
        width: 100%;
        min-height: 100vh;

        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        font-size: ${theme.fontSize[0]};
        font-family: ${theme.fontFamily};
        line-height: 1.4;
    }

    ul {
        list-style: none;
    }

    img {
        /* remove pixels below display: inline */
        display: block;
    }

    a {
        text-decoration: none;
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;
    }

    [disabled] {
        pointer-events: none;
    }

    :focus {
        outline: 1px solid ${theme.color.focus};
    }
`;
