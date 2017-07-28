class Task < ApplicationRecord
  validates :title, :project_id, presence: true
  validates :checked, inclusion: { in: [true, false] }

  belongs_to :project
end
