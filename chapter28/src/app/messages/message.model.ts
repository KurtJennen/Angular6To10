export class Message {
    constructor(private text: string, private error: boolean = false, public responses?: [string, (string) => void][]) { }
}