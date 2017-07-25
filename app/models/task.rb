class Task < ApplicationRecord
  validates :title, :details, :project_id, presence: true

  belongs_to :project
end
