class CreateAddTeamIdToTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :add_team_id_to_tasks do |t|
      t.integer :team_id

      t.timestamps
    end
  end
end
