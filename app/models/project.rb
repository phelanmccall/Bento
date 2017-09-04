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
#  index      :integer
#

class Project < ApplicationRecord
  validates :title, :creator_id, :team_id, presence: true

  before_validation :ensure_index!
  before_create :enforce_next_index!
  before_update :update_indices!

  belongs_to :manager,
  foreign_key: :creator_id,
  class_name: :User

  belongs_to :team,
  foreign_key: :team_id,
  class_name: :Team

  has_many :tasks,
  dependent: :destroy

  private

  def ensure_index!
    next_index = Project.where(team_id: team_id).count
    if index.nil? || index < 0 || index > next_index
      self.index = next_index
    end
  end

  def enforce_next_index!
    self.index = Project.where(team_id: team_id).count
  end

  def update_indices!
    old_index = Project.find(id).index

    return nil if index == old_index

    if index < old_index
      Project.where(
        "team_id = ? AND index >= ? AND index < ?",
        team_id,
        index,
        old_index
      ).update_all("index = index + 1")
    else
      Project.where(
        "team_id = ? AND index > ? AND index <= ?",
        team_id,
        old_index,
        index
      ).update_all("index = index - 1")
    end

  end
end
