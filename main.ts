import { Game } from './src/gameLogic/game';
import {RenderBoard} from "./src/renderer/rebderBoar"
let game = new Game()
let board = new RenderBoard()


board.draw()

let refersh = document.getElementById("restart")

refersh.addEventListener("click", function(){
    location.reload()
})