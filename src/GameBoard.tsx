import { useState } from "react"

import { IGameHandler } from "./IGameHandler"

interface GameBoardProps {
    gameHandler: IGameHandler
}

export const GameBoard = (props: GameBoardProps) => {
    const [currentText, setCurrentText] = useState("")
    const [story, setStory] = useState(props.gameHandler.getStory())

    const submit = () => {
        props.gameHandler.submit(currentText)
        setCurrentText("")
    }

    const reset = () => {
        props.gameHandler.reset()
        setStory(props.gameHandler.getStory())
    }

    if (story.isFinished()) {
        return (
            <div className="game-board">
                <h2>Exquisite Corpse</h2>

                <p className="story">
                    {story.getStory()}
                </p>

                <input
                    type="button"
                    value="Play again!"
                    onClick={reset} />
            </div>
        )
    }

    let lastWord = story.getLastWord()
    let prefix = lastWord.length > 0 ? lastWord : ""

    const renderPrefix = () => {
        if (prefix.length > 0) {
            return <span className="prefix pre-ellipsis">{prefix}&lrm;</span>
        }

        return null
    }

    let partMaxLength = props.gameHandler.getPartMaxLength()

    return (
        <div className="game-board">
            <h2>Exquisite Corpse</h2>

            <h4 className="story-reminder">
                You are writing part <b>{story.getPart()}</b> of the <b>{story.getPhase()}</b> of the story.
            </h4>

            <div className="input-box">
                {renderPrefix()}
                <textarea
                    className="story-text-area"
                    required
                    value={currentText}
                    onChange={e => setCurrentText(e.target.value)}
                    cols={50}
                    rows={7}
                    maxLength={partMaxLength} />
            </div>

            <p>{currentText.length}/{partMaxLength}</p>

            <input
                type="button"
                value="Submit"
                onClick={submit}
                disabled={currentText.length <= 0} />
        </div>
    )
}
