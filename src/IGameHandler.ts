import { Story } from "./Story"

export interface IGameHandler {
    getStory(): Story
    getPartMaxLength(): number
    submit: (part: string) => void
    reset: () => void
}
