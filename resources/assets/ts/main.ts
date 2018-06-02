import {TicTacToe} from "./Models/TicTacToe"
import {TicTacToeView} from "./Views/TicTacToeView"
import {Player} from "./Models/Player"
import {Board} from "./Views/Board"
import {Marker} from "./Enums/Marker"
import {ModeSelector} from "./Models/ModeSelector"
import { Mode } from "./Enums/Mode";

window.addEventListener("DOMContentLoaded", () => {
    let buttons = <NodeListOf<HTMLButtonElement>> document.querySelectorAll(".cell")
    let boardContainer = <HTMLElement> document.querySelector(".game-board-container")
    let boardNode = <HTMLElement> document.querySelector(".game-board")
    let buttonsSelectMarker = <NodeListOf<HTMLButtonElement>> document.querySelectorAll(".button-choose-marker")
    let buttonsSelectMode = <NodeListOf<HTMLButtonElement>> document.querySelectorAll(".button-choose-mode")

    let modeSelector

    Array.prototype.forEach.call(buttonsSelectMode, button => {
        button.addEventListener("click", () => {
            let mode = button.getAttribute("data-mode")
            modeSelector = new ModeSelector(mode)

            let container = <HTMLElement> document.querySelector(".choose-mode-container")
            container.classList.add('hidden')
        })
    })

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
            container.classList.add('hidden')

            let player1 = new Player("Player 1", player1Marker)
            let player2
            if (modeSelector.getMode() === Mode.Multiplayer) {
                player2 = new Player("Player 2", player2Marker)
            } else {
                player2 = new Player("Computer", player2Marker)
            }
            let players = {
                player1,
                player2
            }

            let board = new Board(boardContainer, boardNode, buttons)
            let view = new TicTacToeView
            let game = new TicTacToe(players, board, view, modeSelector.getMode())
            game.attach(board)
            game.setcurrentPlayer(player1)
        })
    })

})
