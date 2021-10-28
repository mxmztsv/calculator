import React from 'react'

export const OperationButton = ({handler, text}) => {
    return(

        <button
            className="operation-button"
            onClick={handler}
            name={text}
        >
            {text}
        </button>
    )
}
