export class Story {
    private start: string[]
    private middle: string[]
    private end: string[]

    private phase: StoryPhase

    public constructor(
        private startPartCount: number,
        private middlePartCount: number,
        private endPartCount: number,
    ) {
        this.start = []
        this.middle = []
        this.end = []

        this.phase = StoryPhase.Start
    }

    public push(part: string) {
        if (this.phase === StoryPhase.Start) {
            this.start.push(part)

            if (this.start.length >= this.startPartCount) {
                this.phase = StoryPhase.Middle
            }
        }
        else if (this.phase === StoryPhase.Middle) {
            this.middle.push(part)

            if (this.middle.length >= this.middlePartCount) {
                this.phase = StoryPhase.End
            }
        }
        else if (this.phase === StoryPhase.End) {
            this.end.push(part)

            if (this.end.length >= this.endPartCount) {
                this.phase = StoryPhase.Finished
            }
        }
        else {
            throw "This story is finished!"
        }
    }

    public getPhase() {
        return this.phase
    }

    public getPart() {
        switch (this.phase) {
            case StoryPhase.Start:
                return this.start.length + 1

            case StoryPhase.Middle:
                return this.middle.length + 1

            case StoryPhase.End:
                return this.end.length + 1

            default:
                return ""
        }
    }

    public getStory() {
        if (this.phase !== StoryPhase.Finished) {
            return ""
        }

        return [this.start.join(), this.middle.join(), this.end.join()].join("\n\n")
    }
}

export enum StoryPhase {
    Start = "start",
    Middle = "middle",
    End = "end",
    Finished = "finished",
}
