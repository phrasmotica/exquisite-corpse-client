import { useState } from "react"
import { Story, StoryPhase } from "./Story"

export const GameBoard = () => {
    const [currentText, setCurrentText] = useState("")
    const [story, setStory] = useState(new Story(1, 1, 1))

    const submit = () => {
        story.push(currentText)
        setCurrentText("")
    }

    const reset = () => {
        setStory(new Story(1, 1, 1))
    }

    let isFinished = story.getPhase() === StoryPhase.Finished
    if (isFinished) {
        return (
            <div className="game-board">
                <h2>Exquisite Corpse</h2>

                <p className="story">{story.getStory()}</p>

                <input
                    type="button"
                    value="Play again!"
                    onClick={reset} />
            </div>
        )
    }

    return (
        <div className="game-board">
            <h2>Exquisite Corpse</h2>

            <h4 className="story-reminder">
                You are writing part <b>{story.getPart()}</b> of the <b>{story.getPhase()}</b> of the story.
            </h4>

            <textarea
                className="story-text-area"
                required
                value={currentText}
                onChange={e => setCurrentText(e.target.value)}
                cols={50}
                rows={5}
                maxLength={250} />

            <p>{currentText.length}/250</p>

            <input
                type="button"
                value="Submit"
                onClick={submit}
                disabled={currentText.length <= 0} />
        </div>
    )
}
