import React from "react";
import {Heading} from "@/components/Heading";
import {MenuScreen} from "@/components/MenuScreen";
import {Button} from "@/components/common/Button";

export const HomePage: React.FC = () => {
    const onStartButtonClick = () => {
        console.log("start");
    };
    return (
        <MenuScreen>
            <Heading>The SOAP</Heading>
            <Button onClick={onStartButtonClick}>Start Game</Button>
        </MenuScreen>
    );
};
