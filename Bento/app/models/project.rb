class Project < ApplicationRecord
  validates :manager, :title, presence: true

  belongs_to :manager,
  foreign_key: :creator_id,
  class_name: :User

  has_many :tasks,
  dependent: :destroy



end
