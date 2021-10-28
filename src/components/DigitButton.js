import React from 'react'

export const DigitButton = ({handler, text}) => {
    return(

        <button
            className="digit-button"
            onClick={handler}
            name={text}
        >
            {text}
        </button>
    )
}
