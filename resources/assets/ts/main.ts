import {TicTacToe} from "./Models/TicTacToe"
import {TicTacToeView} from "./Views/TicTacToeView"
import {Player} from "./Models/Player"
import {Board} from "./Models/Board"
import {Marker} from "./Enums/Marker"

window.addEventListener("DOMContentLoaded", () => {
    let boardNode = <HTMLElement> document.querySelector(".game-board")
    let buttonsSelectMarker = <NodeListOf<HTMLButtonElement>> document.querySelectorAll(".button-choose-marker")

    Array.prototype.forEach.call(buttonsSelectMarker, button => {
        button.addEventListener("click", () => {
            let marker = button.getAttribute("data-marker")
            let player1Marker
            let player2Marker
            if (marker === Marker.Xis) {
                player1Marker =  Marker.Xis
                player2Marker =  Marker.Circle
            } else {
                player1Marker =  Marker.Circle
                player2Marker =  Marker.Xis
            }

            let container = <HTMLElement> document.querySelector(".choose-marker-container")
            container.style.display = "none"

            let player1 = new Player("Player 1", player1Marker)
            let player2 = new Player("Player 2", player2Marker)
            let players = {
                player1,
                player2
            }

            let board = new Board(boardNode)
            let view = new TicTacToeView
            let game = new TicTacToe(players, board, view)
            game.setcurrentPlayer(player1)
        })
    })

})
