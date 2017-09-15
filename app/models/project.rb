# == Schema Information
#
# Table name: projects
#
#  id         :integer          not null, primary key
#  creator_id :integer
#  title      :string
#  team_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

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
