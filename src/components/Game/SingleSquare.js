import React from 'react'

const SingleSquare = (props) => {
    
    let squareClass = ['square'];
    
    if(props.square !== '') squareClass.push('square-filled')

    return (
        <div className={squareClass.join(' ')}
         onClick={()=> props.square === '' ? props.handleClick(props.index) : null} >
            {props.square}
        </div>
    )
}

export default SingleSquare
