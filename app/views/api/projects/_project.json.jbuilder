json.extract! project,
              :id,
              :title,
              :creator_id,
              :index,
              :team_id

# It's *just* _RUBY!_ — who knew?! (I mean I did... all along)
make_task_arrays = project.tasks.map(&:id)

json.tasks make_task_arrays

# json.tasks(project.tasks) do |task|
#   json.id task.id
#   json.title task.title
#   json.project_id task.project_id
#   json.checked task.checked
#   json.index task.index
#   json.team_id task.team_id
# end
