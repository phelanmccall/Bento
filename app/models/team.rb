# == Schema Information
#
# Table name: teams
#
#  id         :integer          not null, primary key
#  team_name  :string
#  owner_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  validates :owner_id, :team_name, presence: true
  
  belongs_to :owner,
             foreign_key: :owner_id,
             class_name: :User

  has_many :projects,
           foreign_key: :team_id,
           class_name: :Project,
           dependent: :destroy

  has_many :memberships,
           foreign_key: :team_id,
           class_name: :Membership

  has_many :users,
           through: :memberships,
           source: :user
end
