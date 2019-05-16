import React from "react"
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