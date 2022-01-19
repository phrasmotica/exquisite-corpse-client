import { IGameHandler } from "./IGameHandler"
import { Story } from "./Story"

export class SinglePlayerGameHandler implements IGameHandler {
    private story!: Story

    public constructor(
        private startPartCount: number,
        private middlePartCount: number,
        private endPartCount: number,
        private partMaxLength: number,
    ) {
        this.reset()
    }

    public getStory() {
        return this.story
    }

    public getPartMaxLength() {
        return this.partMaxLength
    }

    public submit(part: string) {
        this.story.push(part)
    }

    public reset() {
        this.story = new Story(this.startPartCount, this.middlePartCount, this.endPartCount)
    }
}
