import {Marker} from "../Enums/Marker"
import {Board} from "../Models/Board"
import {Players} from "../Interfaces/Players"
import {Player} from "../Models/Player"
import {Observer} from "./../../../../node_modules/ts-observer-pattern/Observer"

export class TicTacToe implements Observer
{
    private players: Players;
    private board: Board;
    private boardVectors
    private Markers: Marker
    private currentPlayer: Player

    public constructor(players: Players, board: Board)
    {
        this.players = players
        this.board = board
        this.boardVectors = [
            [ NaN, NaN, NaN ],
            [ NaN, NaN, NaN ],
            [ NaN, NaN, NaN ]
        ]
        this.addListeners()
    }

    private addListeners(): void
    {
        Array.prototype.forEach.call(this.board.getButtons(), button => {
            button.addEventListener("click", () => {
                this.board.mark(this.currentPlayer, button)
                this.update(button)
                this.exchangeTurns()
            })
        })
    }

    public update(button: HTMLButtonElement): this
    {
        let positions = button.getAttribute("data-position").split("-")
        button.disabled = true
        this.boardVectors[positions[0]][positions[1]] = this.currentPlayer.getMarker()
        this.verify()
        console.log(this.boardVectors)
        return this
    }

    public setcurrentPlayer(player: Player): void
    {
        this.currentPlayer = player
    }

    private exchangeTurns(): void
    {
        if (this.currentPlayer === this.players.player1) {
            this.currentPlayer = this.players.player2
        } else {
            this.currentPlayer = this.players.player1
        }
    }

    private verify(): void
    {
        //Horizontals
        for (let i = 0; i < 3; i++) {
            this.areEqual(this.boardVectors[i])
        }

        //Verticals
        for (let i = 0; i < 3; i++) {
            this.areEqual([
                this.boardVectors[0][i],
                this.boardVectors[1][i],
                this.boardVectors[2][i]
            ])
        }

        // Transversals
        this.areEqual([
            this.boardVectors[0][0],
            this.boardVectors[1][1],
            this.boardVectors[2][2]
        ])
        this.areEqual([
            this.boardVectors[2][2],
            this.boardVectors[1][1],
            this.boardVectors[0][0]
        ])
    }

    private areEqual(...params): boolean
    {
        if (params[0][0] === params[0][1] && params[0][1] === params[0][2]) {
            this.finishGame()
        }
        return params[0] === params[1] === params[2]
    }

    private finishGame(): void
    {
        alert("Fim de Jogo")
        setTimeout(this.resetGame.bind(this),1000)
    }

    private resetGame(): void
    {
        this.boardVectors = [
            [ NaN, NaN, NaN ],
            [ NaN, NaN, NaN ],
            [ NaN, NaN, NaN ]
        ]
        Array.prototype.forEach.call(this.board.getButtons(), button => {
            button.disabled = false
            button.classList.remove(this.board.getXClass())
            button.classList.remove(this.board.getCircleClass())
        })
    }
}
