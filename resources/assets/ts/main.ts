import {TicTacToe} from "./Models/TicTacToe"
import {Player} from "./Models/Player"
import {Board} from "./Models/Board"
import {Marker} from "./Enums/Marker"

window.addEventListener("DOMContentLoaded", () => {
    let buttons = <NodeListOf<HTMLButtonElement>>document.querySelectorAll("button")

    let player1 = new Player("Player 1", Marker.Xis)
    let player2 = new Player("Player 2", Marker.Circle)
    let players = {
        player1,
        player2
    }
    let board = new Board(buttons)
    let game = new TicTacToe(players,board)
    game.setcurrentPlayer(player1)
})
