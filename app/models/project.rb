class Project < ApplicationRecord
  validates :title, :creator_id, presence: true

  belongs_to :manager,
  foreign_key: :creator_id,
  class_name: :User

  has_many :tasks,
  dependent: :destroy
end