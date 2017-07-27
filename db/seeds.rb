# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user01 = User.create!(username: "guest", password: "password")
user02 = User.create!(username: "Waldo", password: "password")

team01 = Team.create!(team_name: "Primary Team", owner_id: user01.id)
team02 = Team.create!(team_name: "Secondary Team", owner_id: user01.id)
team03 = Team.create!(team_name: "Tertiary Team", owner_id: user01.id)
team04 = Team.create!(team_name: "Quartiary Team", owner_id: user01.id)
team05 = Team.create!(team_name: "Primary Team user2", owner_id: user02.id)
team05 = Team.create!(team_name: "Secondary Team user2", owner_id: user02.id)

proj01 = Project.create!(title: "Primary Project", creator_id: user01.id, team_id: team01.id)
proj02 = Project.create!(title: "Secondary Project", creator_id: user01.id, team_id: team01.id)
proj03 = Project.create!(title: "Tertiary Project", creator_id: user01.id, team_id: team01.id)
proj04 = Project.create!(title: "Quartiary Project", creator_id: user01.id, team_id: team01.id)
proj05 = Project.create!(title: "Pentiary Project", creator_id: user01.id, team_id: team01.id)

task01 = Task.create!(title: "TaskTitle1P1", details: "Task is detailed", project_id: proj01.id)
task02 = Task.create!(title: "Another task 2", details: "Task is", project_id: proj01.id)
task03 = Task.create!(title: "Another task 3", details: "T detailed", project_id: proj01.id)

task04 = Task.create!(title: "TAnother tas 1", details: "Task", project_id: proj05.id)
task05 = Task.create!(title: "T2", details: "Task", project_id: proj05.id)
task06 = Task.create!(title: "TaskTitlek 3", details: "Task is", project_id: proj05.id)
task07 = Task.create!(title: "Taskk 4", details: "Task is", project_id: proj05.id)
task08 = Task.create!(title: "ATaskTik 5", details: "detail", project_id: proj05.id)

mem01 = Membership.create!(user_id: user01.id, team_id: team01.id)
mem02 = Membership.create!(user_id: user01.id, team_id: team02.id)
mem03 = Membership.create!(user_id: user01.id, team_id: team03.id)
mem04 = Membership.create!(user_id: user01.id, team_id: team04.id)
mem05 = Membership.create!(user_id: user02.id, team_id: team01.id)
