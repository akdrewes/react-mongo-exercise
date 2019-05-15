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

export function patchCard(bookmarked, _id) {
  return fetch(`/cards/${_id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({bookmarked: bookmarked})
  })
  .then(res => res.json())
}

export function setLocal(name, data) {
    localStorage.setItem(name, JSON.stringify(data))
  }
  
export function getLocal(name) {
    try {
      return JSON.parse(localStorage.getItem(name))
    } catch (error) {
      console.log(error)
    }
}