export class TicTacToe
{
    private canvas: HTMLCanvasElement

    public constructor(canvas: HTMLCanvasElement)
    {
        this.canvas = canvas
    }

    public drawBoard(): this
    {
        let ctx = this.canvas.getContext("2d")
        ctx.moveTo(0,100)
        ctx.lineTo(300,100)
        ctx.moveTo(0,200)
        ctx.lineTo(300,200)

        ctx.moveTo(100,0)
        ctx.lineTo(100,300)
        ctx.moveTo(200,0)
        ctx.lineTo(200,300)

        ctx.stroke()
        return this
    }
}
