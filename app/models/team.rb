class Team < ApplicationRecord
  validates :owner_id, :team_name, presence: true

  belongs_to :owner,
  foreign_key: :owner_id,
  class_name: :User

  has_many :memberships

end
