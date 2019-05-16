import React from 'react'
import PropTypes from 'prop-types'

export default function Form ({onFormSubmit, ...props}) {

    function handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        const title = form.title.value
        const description = form.description.value
        const tags = form.tags.value.split(', ')
        
        onFormSubmit({title, description, tags})

        props.history.push('/')
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

Form.propTypes = {
    onFormSubmit: PropTypes.func.isRequired
}