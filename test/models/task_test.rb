# == Schema Information
#
# Table name: tasks
#
#  id         :integer          not null, primary key
#  title      :string
#  project_id :integer
#  checked    :boolean          default(FALSE)
#  index      :integer          default(0)
#  details    :string
#  team_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
