class AddIndexToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :index, :integer
  end
end
