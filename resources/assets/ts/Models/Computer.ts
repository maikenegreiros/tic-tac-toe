import {TicTacToe} from "./TicTacToe"
import {Board} from "../Views/Board"

export class Computer
{
    public play(tictac: TicTacToe, board: Board): void
    {
        // Capturar os botões e escolher um que será passado para os métodos abaixo
        let activeButtons = Array.prototype.filter.call(board.getButtons(), cell => cell.getAttribute("disabled") === null)
        let random = Math.floor(Math.random() * activeButtons.length)
        board.mark(tictac.getCurrentPlayer(),activeButtons[random])
        tictac.update(activeButtons[random])
        tictac.exchangeTurns()
    }
}
