import React from 'react'

function Form () {
    return (
        <div>
            <input type="text" name="title" placeholder="title" ></input>
            <input type="text" name="description" placeholder="description"></input>
            <input type="text" name="tags" placeholder="tags"></input>
            <button>Add card</button>
        </div>
    )
}

export default Form