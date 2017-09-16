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

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
