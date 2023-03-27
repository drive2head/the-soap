import React, {useEffect, useState} from "react";
import Phaser from "phaser";
import logoImg from "@/assets/logo.png";

export const Game = () => {
    const [phaser, setPhaser] = useState<Phaser.Game>();

    function preload() {
        this.load.image("logo", logoImg);
    }

    function create() {
        const logo = this.add.image(400, 150, "logo");
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }

    useEffect(() => {
        const _phaser = new Phaser.Game({
            type: Phaser.AUTO,
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
                parent: "phaser-parent",
                width: window.innerWidth,
                height: window.innerHeight
            },
            backgroundColor: "#ffd13b",
            scene: [{preload, create}]
        });
        setPhaser(_phaser);
    }, []);

    return <div id="phaser-parent"></div>;
};
