import React from "react";
import ReactDOM from "react-dom";

import {ThemeProvider} from "styled-components";
import {HomeScreen} from "@/pages/HomePage";
import {theme} from "@/styles/theme";
import GlobalStyles from "@/styles/GlobalStyles";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <HomeScreen />
            </>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
