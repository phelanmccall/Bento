# == Schema Information
#
# Table name: tasks
#
#  id         :integer          not null, primary key
#  title      :string
#  details    :string
#  checked    :boolean          default(FALSE)
#  project_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  index      :integer
#

class Task < ApplicationRecord
  validates :title, :project_id, presence: true
  validates :checked, inclusion: { in: [true, false] }

  belongs_to :project
end
