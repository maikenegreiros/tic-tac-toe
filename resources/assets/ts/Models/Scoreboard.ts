import {IScoreboard} from "../Interfaces/IScoreboard"

export class Scoreboard
{
    private scoreboard: IScoreboard

    public constructor()
    {
        this.scoreboard = {
            player1: 0,
            player2: 0
        }
    }

    public update(data: IScoreboard): this
    {
        this.scoreboard = data
        return this
    }

    public getScoreboard(): IScoreboard
    {
        return this.scoreboard
    }
}
