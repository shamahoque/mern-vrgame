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

const list = () => {
  return fetch('/api/games', {
    method: 'GET',
  }).then(response => {
    return response.json()
  }).catch((err) => console.log(err))
}

const listByMaker = (params) => {
  return fetch('/api/games/by/'+params.userId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

export {
  create,
  list,
  listByMaker
}
