# == Schema Information
#
# Table name: projects
#
#  id         :integer          not null, primary key
#  creator_id :integer
#  title      :string
#  team_id    :integer
#  index      :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
