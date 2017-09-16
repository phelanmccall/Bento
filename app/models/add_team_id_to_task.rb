# == Schema Information
#
# Table name: add_team_id_to_tasks
#
#  id         :integer          not null, primary key
#  team_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class AddTeamIdToTask < ApplicationRecord
end
