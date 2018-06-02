import {Marker} from "../Enums/Marker"
import {Mode} from "../Enums/Mode"
import {Board} from "../Views/Board"
import {TicTacToeView} from "../Views/TicTacToeView"
import {Players} from "../Interfaces/Players"
import {Player} from "../Models/Player"
import {Computer} from "../Models/Computer"
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
    private mode: Mode
    private computer: Computer
    private ended: boolean
    private resultContainer: HTMLElement

    public constructor(players: Players, board: Board, view: TicTacToeView, mode: Mode)
    {
        super()
        this.players = players
        this.board = board
        this.view = view
        this.mode = mode
        this.ended = false
        this.resultContainer = document.createElement("div")
        this.resultContainer.classList.add("result-container")
        if (this.mode === Mode.OnePlayer) {
            this.computer = new Computer;
        }
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

            this.update(button)
            this.exchangeTurns()
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

    public getCurrentPlayer(): Player
    {
        return this.currentPlayer
    }

    public exchangeTurns(): void
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
            this.ended = true
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
                this.ended = true
            } else {
                this.finishGame(`${this.players.player2.getNickName()} wins`)
                this.ended = true
            }
        } else {
            console.log(this.currentPlayer)
            // Checa se é a vez do computador para ele então jogar
            setTimeout(() => {
                if (this.mode === Mode.OnePlayer
                    && this.currentPlayer === this.players.player2
                    && !this.ended) {
                    this.computer.play(this, this.board)
                };
            },1000)
        }
    }

    private finishGame(text: string): void
    {
        this.showResult(text)
        setTimeout(this.resetGame.bind(this), 2000)
    }

    private showResult(text: string): void
    {
        const container = document.querySelector("#app")
        container.appendChild(this.resultContainer)
        this.resultContainer.innerHTML = `<p>${text}</p>`
        this.resultContainer.classList.remove("hidden")
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
        this.ended = false
        this.resultContainer.classList.add("hidden")
        this.verify()
    }
}
