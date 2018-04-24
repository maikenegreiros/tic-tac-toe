import {TicTacToe} from "./Views/TicTacToe"

window.addEventListener("DOMContentLoaded", () => {
    let canvas = <HTMLCanvasElement> document.querySelector("#game-canvas")
    let ticTacToe = new TicTacToe(canvas)
    ticTacToe.drawBoard()
})
