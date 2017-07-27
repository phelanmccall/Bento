class CreateTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :teams do |t|
      t.string :owner_id
      t.string :projects
      t.string :memberships

      t.timestamps
    end
  end
end
