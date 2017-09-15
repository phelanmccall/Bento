class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.references :project, foreign_key: true
      t.integer :team_id
      t.boolean :checked, default: false
      t.integer :index, default: 0
      t.string :details

      t.timestamps
    end
  end
end
