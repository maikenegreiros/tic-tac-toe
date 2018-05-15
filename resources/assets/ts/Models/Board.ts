import {Player} from "./Player"
import {Marker} from "../Enums/Marker"
import {Subject} from "./../../../../node_modules/ts-observer-pattern/Subject"
import {Observer} from "./../../../../node_modules/ts-observer-pattern/Observer"

export class Board extends Subject implements Observer
{
    private xClass: string
    private circleClass: string
    private container: HTMLElement
    private board: HTMLElement
    private buttons: NodeListOf<HTMLButtonElement>

    public constructor(container: HTMLElement, board: HTMLElement, buttons: NodeListOf<HTMLButtonElement>)
    {
        super()
        this.container = container
        this.board = board
        this.buttons = buttons
        this.xClass = "xis"
        this.circleClass = "circle"
    }

    public update(data): this
    {
        this.container.classList.add(data.current)
        this.container.classList.remove(data.next)
        return this
    }

    public getBoard(): HTMLElement
    {
        return this.board
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
