import React from 'react'
import PropTypes from 'prop-types'

export default function Tag({tags}) {
    return <p><em>{tags.join(', ')}</em></p>
}

Tag.propTypes = {
    tags: PropTypes.array
}