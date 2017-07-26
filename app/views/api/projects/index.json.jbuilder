@projects.each do |project|
  json.set! project.id do
    json.partial! 'project', project: project
    json.tasks({})
    json.tasks do
      project.tasks.each do |task|
        json.set! task.id do
          json.id task.id
          json.title task.title
          json.details task.details
          json.project_id task.project_id
          json.checked task.checked
        end
      end
    end
  end
end
