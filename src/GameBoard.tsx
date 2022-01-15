export const GameBoard = () => {
    return (
        <div>
            <h4>Exquisite Corpse</h4>

            <textarea
                className="story-text-area"
                required
                cols={50}
                rows={5} />

            <input type="submit" />
        </div>
    )
}
