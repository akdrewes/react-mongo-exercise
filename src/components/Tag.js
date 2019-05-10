import React from 'react'

function Tag({tags}) {
    return <p><em>{tags.join(', ')}</em></p>
}

export default Tag