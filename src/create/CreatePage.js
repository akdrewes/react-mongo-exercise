import React from 'react'
import Form from './Form'

export default function CreatePage({createCard, ...props}) {
    return (
        <Form onFormSubmit={createCard} {...props} />
    )
}