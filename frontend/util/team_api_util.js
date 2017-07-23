export const fetchAllTeams =  => (
  $.ajax({
    method: 'GET',
    url: 'api/teams'
    data: teams
  })
)
