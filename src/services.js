export function getCards() {
    return fetch('/cards')
    .then(res => res.json())
}

export function postCard({title, description, tags}) {

    return fetch('/cards', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: title, description: description, tags: tags})
    })
    .then(res => res.json())
}