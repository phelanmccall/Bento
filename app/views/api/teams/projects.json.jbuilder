json.array! @teams do |team|
  json.id team.id
  json.team_name team.team_name
  json.owner_id team.owner_id

  json.projects team.projects
end