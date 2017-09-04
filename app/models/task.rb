# == Schema Information
#
# Table name: tasks
#
#  id         :integer          not null, primary key
#  title      :string
#  details    :string
#  checked    :boolean          default(FALSE)
#  project_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  index      :integer
#

class Task < ApplicationRecord
  validates :title, :project_id, presence: true
  validates :checked, inclusion: { in: [true, false] }

  before_validation :ensure_index!
  before_create :enforce_next_index!
  before_update :update_indices!

  belongs_to :project,
  foreign_key: :project_id,
  class_name: :Task

  private

  def ensure_index!
    next_index = Task.where(project_id: project_id).count
    if index.nil? || index < 0 || index > next_index
      self.index = next_index
    end
  end

  def enforce_next_index!
    self.index = Task.where(project_id: project_id).count
  end

  def update_indices!
    old_index = Task.find(id).index

    return nil if index == old_index

    if index < old_index
      Task.where(
        "project_id = ? AND index >= ? AND index < ?",
        project_id,
        index,
        old_index
      ).update_all("index = index + 1")
    else
      Task.where(
        "project_id = ? AND index > ? AND index <= ?",
        project_id,
        old_index,
        index
      ).update_all("index = index - 1")
    end

  end
end
