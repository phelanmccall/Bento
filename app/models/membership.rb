class Membership < ApplicationRecord
  validates :user_id, :team_id, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :team,
  foreign_key: :team_id,
  class_name: :Team
end
