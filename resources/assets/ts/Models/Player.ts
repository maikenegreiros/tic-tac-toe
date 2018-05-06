import {Marker} from "../Enums/Marker"
export class Player
{
    private nickname: string
    private marker: Marker

    public constructor(nickname: string, marker: Marker)
    {
        this.nickname = nickname
        this.marker = marker
    }

    public getMarker(): Marker
    {
        return this.marker
    }

    public getNickName(): string
    {
        return this.nickname
    }
}
