import React from "react"
import PropTypes from 'prop-types'
import Tag from "./Tag"

export default function Card ({title, description, tags, bookmarked, onToggleBookmark, onDelete}) {
    return (
        <li>
            <h2>{title}</h2>
            <p>{description}</p>
            <Tag tags={tags} />
            <button onClick={onToggleBookmark}>{bookmarked ? "Bookmarked" : "Bookmark"}</button>
            <button onClick={onDelete}>Delete card</button>
        </li>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    tags: PropTypes.array,
    bookmarked: PropTypes.bool.isRequired,
    onToggleBookmark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}