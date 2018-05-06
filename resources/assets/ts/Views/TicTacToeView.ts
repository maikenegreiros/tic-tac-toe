export class TicTacToeView
{
    private playerTurnSelector: string

    public constructor()
    {
        this.playerTurnSelector = ".player-turn"
    }

    public update(data)
    {
        this.updatePlayerTurn(data)
    }

    private updatePlayerTurn(data): this
    {
        let playerTurnNode = document.querySelector(this.playerTurnSelector)
        playerTurnNode.innerHTML = `<p>${data.getNickName()}'s turn</p>`
        return this
    }
}
