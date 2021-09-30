import React from 'react'

const GameOver = (props) => {

    return (
        <div className='gameOver'>
            {props.playerWon ? `Player ${props.playerWon} won!!` : 'Game Over!'}
            <button onClick={props.playAgain}>Play again</button>
        </div>
    )
}

export default GameOver
