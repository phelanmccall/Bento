class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :details
      t.boolean :checked, default: false
      t.references :project, foreign_key: true
      t.integer :index, default: 0

      t.timestamps
    end
  end
end
