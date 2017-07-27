class Project < ApplicationRecord
  validates :title, :creator_id, :team_id, presence: true

  belongs_to :manager,
  foreign_key: :creator_id,
  class_name: :User

  belongs_to :team,
  foreign_key: :team_id,
  class_name: :Team

  has_many :tasks,
  dependent: :destroy
end
