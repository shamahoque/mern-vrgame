const create = (params, credentials, game) => {
  return fetch('/api/games/by/'+ params.userId, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: JSON.stringify(game)
    })
    .then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
}

export {
  create
}
