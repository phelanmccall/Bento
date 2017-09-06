# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user01 = User.create!(username: "guest", password: "password")
user02 = User.create!(username: "Waldo", password: "password")
user03 = User.create!(username: "Atom", password: "password")
user04 = User.create!(username: "atom", password: "password")

team01 = Team.create!(team_name: "Primary Team", owner_id: user01.id)
team02 = Team.create!(team_name: "Secondary Team", owner_id: user01.id)
team03 = Team.create!(team_name: "Tertiary Team", owner_id: user01.id)
team04 = Team.create!(team_name: "Quaternary Team", owner_id: user01.id)
team05 = Team.create!(team_name: "WELCOME TO BENTO!", owner_id: user01.id)


proj01 = Project.create!(title: "Primary Project", creator_id: user01.id, team_id: team01.id)
proj02 = Project.create!(title: "Secondary Project", creator_id: user01.id, team_id: team01.id)
proj03 = Project.create!(title: "Tertiary Project", creator_id: user01.id, team_id: team01.id)
proj04 = Project.create!(title: "Quaternary Project", creator_id: user01.id, team_id: team01.id)
proj05 = Project.create!(title: "Quinary Project", creator_id: user01.id, team_id: team02.id)
proj06 = Project.create!(title: "Senary Project", creator_id: user01.id, team_id: team02.id)
proj07 = Project.create!(title: "Septenary Project", creator_id: user01.id, team_id: team02.id)

task01 = Task.create!(title: "Primary Task", details: "details", project_id: proj01.id, index: 0)
task02 = Task.create!(title: "Secondary Task", details: "details", project_id: proj01.id, index: 1)
task03 = Task.create!(title: "Tertiary Task", details: "details", project_id: proj01.id, index: 2)

task04 = Task.create!(title: "Quaternary Task", details: "details", project_id: proj05.id, index: 0)
task05 = Task.create!(title: "Quinary Task", details: "details", project_id: proj05.id, index: 1)
task06 = Task.create!(title: "Senary Task", details: "details", project_id: proj05.id, index: 2)
task07 = Task.create!(title: "Septenary Task", details: "details", project_id: proj05.id, index: 3)
task08 = Task.create!(title: "Octonary Task", details: "details", project_id: proj05.id, index: 4)

task09 = Task.create!(title: "Primary Task", details: "details", project_id: proj02.id, index: 0)

task10 = Task.create!(title: "Secondary Task", details: "details", project_id: proj03.id, index: 0)
task11 = Task.create!(title: "Tertiary Task", details: "details", project_id: proj03.id, index: 1)

task12 = Task.create!(title: "Quaternary Task", details: "details", project_id: proj04.id, index: 0)
task13 = Task.create!(title: "Quinary Task", details: "details", project_id: proj04.id, index: 1)

task14 = Task.create!(title: "Senary Task", details: "details", project_id: proj06.id, index: 0)
task15 = Task.create!(title: "Septenary Task", details: "details", project_id: proj06.id, index: 1)
task16 = Task.create!(title: "Octonary Task", details: "details", project_id: proj07.id, index: 1)

mem01 = Membership.create!(user_id: user01.id, team_id: team01.id)
mem02 = Membership.create!(user_id: user01.id, team_id: team02.id)
mem03 = Membership.create!(user_id: user01.id, team_id: team03.id)
mem04 = Membership.create!(user_id: user01.id, team_id: team04.id)

mem05 = Membership.create!(user_id: user02.id, team_id: team01.id)
mem05 = Membership.create!(user_id: user02.id, team_id: team02.id)
