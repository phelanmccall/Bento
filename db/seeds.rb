# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "guest", password: "password")
User.create(username: "Waldo", password: "password")

Project.create(title: "Primary Project", creator_id: User.first.id)
Project.create(title: "Secondary Project", creator_id: User.first.id)
Project.create(title: "Tertiary Project", creator_id: User.first.id)
Project.create(title: "Quartiary Project", creator_id: User.first.id)
Project.create(title: "Pentiary Project", creator_id: User.first.id)

Task.create(title: "TaskTitle1P1", details: "Task is detailed", project_id: Project.first.id)
Task.create(title: "Another task 2", details: "Task is", project_id: Project.first.id)
Task.create(title: "Another task 3", details: "T detailed", project_id: Project.first.id)

Task.create(title: "TAnother tas 1", details: "Task", project_id: Project.last.id)
Task.create(title: "T2", details: "Task", project_id: Project.last.id)
Task.create(title: "TaskTitlek 3", details: "Task is", project_id: Project.last.id)
Task.create(title: "Taskk 4", details: "Task is", project_id: Project.last.id)
Task.create(title: "ATaskTik 5", details: "detail", project_id: Project.last.id)
