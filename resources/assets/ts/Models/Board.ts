import {Player} from "./Player"
import {Marker} from "../Enums/Marker"
import {Subject} from "./../../../../node_modules/ts-observer-pattern/Subject"

export class Board extends Subject
{
    private buttons: NodeListOf<HTMLButtonElement>
    private xClass: string
    private circleClass: string

    public constructor(buttons: NodeListOf<HTMLButtonElement>)
    {
        super()
        this.buttons = buttons
        this.xClass = "xis"
        this.circleClass = "circle"
    }

    public getButtons(): NodeListOf<HTMLButtonElement>
    {
        return this.buttons
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
