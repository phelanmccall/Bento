export const fetchAllUsers = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users',
    { user }
  })
}

export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
}

export const createUser = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    { user }
  })
}

export const updateUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    { user }
  })
}
