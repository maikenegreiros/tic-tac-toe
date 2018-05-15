import {Marker} from "../Enums/Marker"
import {Board} from "../Models/Board"
import {TicTacToeView} from "../Views/TicTacToeView"
import {Players} from "../Interfaces/Players"
import {Player} from "../Models/Player"
import {Observer} from "./../../../../node_modules/ts-observer-pattern/Observer"
import {Subject} from "./../../../../node_modules/ts-observer-pattern/Subject"

export class TicTacToe extends Subject implements Observer
{
    private players: Players;
    private board: Board;
    private boardVectors
    private Markers: Marker
    private currentPlayer: Player
    private view: TicTacToeView

    public constructor(players: Players, board: Board, view: TicTacToeView)
    {
        super()
        this.players = players
        this.board = board
        this.view = view
        this.boardVectors = [
            [ NaN, NaN, NaN ],
            [ NaN, NaN, NaN ],
            [ NaN, NaN, NaN ]
        ]
        this.addListeners()
    }

    private addListeners(): void
    {
        this.board.getBoard().addEventListener("click", e => {
            let button = <HTMLButtonElement> e.target
            this.board.mark(this.currentPlayer, button)

            // Esse setTimeout será desnecessário depois que
            // eu fizer a apresentação do resultado sem o alert
            setTimeout(() => {
                this.update(button)
                this.exchangeTurns()
            }, 100)
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
        let next = this.currentPlayer === this.players.player1
        ? this.players.player2
        : this.players.player1
        this.notify({
            current: this.currentPlayer.getMarker(),
            next: next.getMarker()
        })
        this.view.update(this.currentPlayer)
    }

    private exchangeTurns(): void
    {
        if (this.currentPlayer === this.players.player1) {
            this.setcurrentPlayer(this.players.player2)
        } else {
            this.setcurrentPlayer(this.players.player1)
        }
    }

    private verify(): void
    {
        if (!this.boardVectors
            .reduce((pre,cur) => pre.concat(cur),[])
            .some(cell => typeof cell === "number")
        ) {
            this.finishGame("That was a draw")
            return
        }

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
            this.boardVectors[0][2],
            this.boardVectors[1][1],
            this.boardVectors[2][0]
        ])
    }

    private areEqual(...params): void
    {
        if (params[0][0] === params[0][1] && params[0][1] === params[0][2]) {
            if (this.players.player1.getMarker() === params[0][0]) {
                this.finishGame(`${this.players.player1.getNickName()} wins`)
            } else {
                this.finishGame(`${this.players.player2.getNickName()} wins`)
            }
        }
    }

    private finishGame(text: string): void
    {
        alert(text)
        setTimeout(this.resetGame.bind(this), 2000)
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
