import React from 'react'
import Button from '../utils/Button'

const GameOver = (props) => {

    return (
        <div className='gameOver'>
            {props.playerWon ? `Player ${props.playerWon} won!!` : 'Game Over!'}
            <Button onClick={props.playAgain}>Play again</Button>
        </div>
    )
}

export default GameOver
