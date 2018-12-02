@projects.each do |project|
  json.set! project.id do
    json.partial! 'project',
                  project: project
  end
end

# @projects = Project
#           .where(team_id: project_params[:team_id])
#           .order(:index)
# from projects_controller.rb
#
# json.set! makes a new json object setting the key of the json pojo to the arg
# the block sets the value, in this case, looking for a partial _project
#
# here is that _project.json.jbuilder partial:
#
# json.extract! project,
#               :creator_id,
#               :id,
#               :index,
#               :team_id
#               :title,
#
# make_task_arrays = project.tasks.map(&:id)
#
# json.tasks make_task_arrays
#
# json.extract! from its arg, pulls from the key passed into it as a keyed arg
#
# json will extract and make each of its key arguments equal to the matching value
# found in the record it looks through, again from above
#
# json.new_key_name will set a key here as well to whatever this key name is,
# setting a key tasks: the array we made, make_task_arrays
