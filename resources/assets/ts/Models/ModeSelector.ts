import {Mode} from "../Enums/Mode"

export class ModeSelector
{
    private mode: Mode

    public constructor(mode: Mode)
    {
        this.mode = mode
    }

    public setMode(mode: Mode):void
    {
        this.mode = mode
    }

    public getMode():Mode
    {
        return this.mode
    }
}
