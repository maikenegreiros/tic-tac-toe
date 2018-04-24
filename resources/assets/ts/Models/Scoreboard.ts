import {Player} from "./Player"

export class Scoreboard
{
    private player1: Player
    private player2: Player

    public constructor(player1: Player, player2: Player)
    {
        this.player1 = player1
        this.player2 = player2
    }
}
