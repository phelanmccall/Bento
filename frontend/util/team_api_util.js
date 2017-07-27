export const fetchAllTeams = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/teams',
    dataType: 'JSON',
    data: {
      team: {
        user_id: user_id
      }
    }
  })
}

export const fetchTeam = (id) =>
{
  return $.ajax({
    method: 'GET',
    url: `/api/teams/${id}`
  })
}

export const createTeam = (team) => {
  return $.ajax({
    method: 'POST',
    url: '/api/teams',
    dataType: 'JSON',
    data: {
      team: {
        owner_id: team.owner_id,
        team_name: team.team_name
      }
    }
  })
}

export const updateTeam = (team) =>
{
  return $.ajax({
    method: 'PATCH',
    url: `/api/teams/${team.id}`,
    dataType: 'JSON',
    data: {
      team: {
        id: team.id,
        team_name: team.name,
        owner_id: team.owner_id
      }
    }
  })
}

export const deleteTeam = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/teams/${id}`
  })
}
