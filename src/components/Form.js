import React from 'react'

export default function Form ({onCreate}) {

    function handleSubmit(event) {
        event.preventDefault()
        const title = event.target.title.value
        const description = event.target.description.value
        const tags = event.target.tags.value.split(', ')
        
        onCreate({title, description, tags})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="title"></input>
            <input type="text" name="description" placeholder="description"></input>
            <input type="text" name="tags" placeholder="tags"></input>
            <button>Add card</button>
        </form>
    )
}