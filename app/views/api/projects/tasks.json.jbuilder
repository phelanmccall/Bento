json.array! @projects do |project|
  json.id project.id
  json.title project.title
  json.creator_id project.creator_id

  json.tasks project.tasks
end
