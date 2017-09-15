# == Schema Information
#
# Table name: tasks
#
#  id         :integer          not null, primary key
#  title      :string
#  details    :string
#  checked    :boolean          default(FALSE)
#  project_id :integer
#  index      :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Task < ApplicationRecord
  validates :title, :project_id, presence: true
  validates :checked, inclusion: { in: [true, false] }

  belongs_to :project,
  foreign_key: :project_id

  # belongs_to :team,
  # foreign_key: :team_id,
  # class_name: :Team

end
