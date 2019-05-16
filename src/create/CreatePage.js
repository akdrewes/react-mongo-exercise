import React from 'react'
import PropTypes from 'prop-types'
import Form from './Form'

export default function CreatePage({createCard, ...props}) {
    return (
        <Form onFormSubmit={createCard} {...props} />
    )
}

CreatePage.propTypes = {
    createCard: PropTypes.func.isRequired
}