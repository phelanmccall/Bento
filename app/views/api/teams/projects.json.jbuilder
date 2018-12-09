json.array! @teams do |team|
  json.extract! team,
                :id,
                :team_name,
                :owner_id,
                :projects
end
