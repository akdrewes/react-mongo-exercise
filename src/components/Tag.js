import React from 'react'

export default function Tag({tags}) {
    return <p><em>{tags.join(', ')}</em></p>
}