# == Schema Information
#
# Table name: tasks
#
#  id         :integer          not null, primary key
#  title      :string
#  details    :string
#  checked    :boolean          default(FALSE)
#  project_id :integer
#  index      :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Task < ApplicationRecord
  validates :title, :project_id, presence: true
  validates :checked, inclusion: { in: [true, false] }

  before_validation :set_index
  before_create :set_next_index
  before_update :update_indices

  belongs_to :project,
  foreign_key: :project_id

  private

  def set_index
    next_index = Task.where(project_id: project_id).length
    self.index = next_index if index.nil? || index < 0 || index > next_index
  end

  def set_next_index
    self.index = Task.where(project_id: project_id).length
  end

  def update_indices
    old_task = Task.find(id)

    if old_task.project == project
      slide_indices
    else
      remove_task(old_task)
      add_task(self)
    end
  end

  def slide_indices
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

  def remove_task(task = self)
    Task.where(
    "project_id = ? AND index > ?",
    task.project_id,
    task.index
    ).update_all("index = index - 1")
  end

  def add_task(task)
    Task.where(
    "project_id = ? AND index >= ?",
    task.project_id,
    task.index
    ).update_all("index = index + 1")
  end
end
