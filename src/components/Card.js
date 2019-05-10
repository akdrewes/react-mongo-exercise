import React from "react"
import Tag from "./Tag"

function Card ({title, description, tags}) {
    return (
        <li>
            <h2>{title}</h2>
            <p>{description}</p>
            <Tag tags={tags} />
        </li>
    )
}

export default Card