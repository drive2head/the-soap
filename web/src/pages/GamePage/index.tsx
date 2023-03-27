import React, {useEffect, useRef, useState} from "react";
import {MenuScreen} from "@/components/MenuScreen";
import {Game} from "@/components/Game";
import styled from "styled-components";

const MainWrapper = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const GamePage: React.FC = () => {
    const [rootStyle, setRootStyle] = useState({});
    const uiRootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const phaserParent = document.getElementById("phaser-parent");
        const copySize = () => {
            window.setTimeout(() => {
                if (phaserParent) {
                    const phaserCanvas = phaserParent.getElementsByTagName("canvas")[0];
                    if (phaserCanvas && uiRootRef.current) {
                        setRootStyle((prev) => ({
                            ...prev,
                            marginLeft: phaserCanvas.style.marginLeft,
                            marginTop: phaserCanvas.style.marginTop,
                            height: phaserCanvas.style.height,
                            width: phaserCanvas.style.width
                        }));
                    }
                }
            }, 0);
        };
        window.addEventListener("resize", copySize);
        copySize();
        return () => {
            window.removeEventListener("resize", copySize);
        };
    }, []);

    return (
        <MainWrapper>
            <Game />
        </MainWrapper>
    );
};
