import React from 'react'

export const ModButton = ({handler, text}) => {
    return(

        <button
            className="mod-button"
            onClick={handler}
            name={text}
        >
            {text}
        </button>
    )
}
