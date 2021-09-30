import React from 'react'
import SingleSquare from './SingleSquare';

const Game = ({board, handleClick}) => {

    if(!board) return null;

    return (
        <div className='board'>
            {board.map((square, i) => {
                return (
                    <SingleSquare key={i} square={square} index={i} handleClick={handleClick} />
                )
            })}
        </div>
    )
}

export default Game
