import React from "react";
import ReactDOM from "react-dom";

import {ThemeProvider} from "styled-components";
// import {HomePage} from "@/pages/HomePage";
import {GamePage} from "@/pages/GamePage";
import {theme} from "@/styles/theme";
import GlobalStyles from "@/styles/GlobalStyles";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <GamePage />
            </>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
