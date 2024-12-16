/**
 * The entry point for the game. Creates the game, kicks off any loading that's needed and then starts the game running.
 */

import "../css/game.css";
import { Game } from "./Core/Game";

document.addEventListener("DOMContentLoaded", async function handleDOMContentLoaded() {
    await startGame();
    document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
});

const startGame = async () => {
    const skiGame: Game = new Game();
    await skiGame.load();
    skiGame.run();
}





