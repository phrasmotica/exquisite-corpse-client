import { GameBoard } from "./GameBoard"

import "./App.css"

const App = () => (
    <div className="App">
        <header className="App-header">
            <GameBoard
                startPartCount={1}
                middlePartCount={1}
                endPartCount={1}
                partMaxLength={250} />
        </header>
    </div>
)

export default App
