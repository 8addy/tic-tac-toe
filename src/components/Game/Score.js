import React from 'react'

const Score = (props) => {

    let playerx_score = 0;
    let playero_score = 0;

    for (let index = 0; index < props.gameScore.length; index++) {
        playerx_score = props.gameScore[index] === props.playerx ? ++playerx_score : playerx_score;
        playero_score = props.gameScore[index] === props.playero ? ++playero_score : playero_score;
    }

    return (
        <div className='score'>
            <p>{props.playerx} </p>
            <div>
                {playerx_score + "  "}
                -
                {"  " + playero_score}
            </div>
            <p>{props.playero}</p>
        </div>
    )
}

export default Score
