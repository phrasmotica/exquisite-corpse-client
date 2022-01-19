import { GameBoard } from "./GameBoard"
import { SinglePlayerGameHandler } from "./SinglePlayerGameHandler"

import "./App.css"

const App = () => (
    <div className="App">
        <header className="App-header">
            <GameBoard
                gameHandler={new SinglePlayerGameHandler(1, 1, 1, 250)} />
        </header>
    </div>
)

export default App
