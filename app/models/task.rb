# == Schema Information
#
# Table name: tasks
#
#  id         :integer          not null, primary key
#  title      :string
#  project_id :integer
#  checked    :boolean          default(FALSE)
#  index      :integer          default(0)
#  details    :string
#  team_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Task < ApplicationRecord
  validates :title, :project_id, presence: true
  validates :checked, inclusion: { in: [true, false] }

  belongs_to :project,
  foreign_key: :project_id

  belongs_to :team,
  foreign_key: :team_id

end
