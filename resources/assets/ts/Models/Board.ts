import {Player} from "./Player"
import {Marker} from "../Enums/Marker"
import {Subject} from "./../../../../node_modules/ts-observer-pattern/Subject"

export class Board extends Subject
{
    private xClass: string
    private circleClass: string
    private board: HTMLElement

    public constructor(board: HTMLElement)
    {
        super()
        this.board = board
        this.xClass = "xis"
        this.circleClass = "circle"
    }

    public getBoard(): HTMLElement
    {
        return this.board
    }

    public mark(player: Player, button: HTMLButtonElement): void
    {
        if (player.getMarker() === Marker.Xis) {
            button.classList.add(this.xClass)
        } else {
            button.classList.add(this.circleClass)
        }
    }

    public getCircleClass(): string
    {
        return this.circleClass;
    }

    public getXClass(): string
    {
        return this.xClass;
    }
}
