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

team01 = Team.create!(team_name: "Welcom to Bento!", owner_id: user01.id)
team02 = Team.create!(team_name: "Primary Team", owner_id: user01.id)
team03 = Team.create!(team_name: "Secondary Team", owner_id: user01.id)
team04 = Team.create!(team_name: "Tertiary Team", owner_id: user01.id)
team05 = Team.create!(team_name: "Quaternary Team", owner_id: user01.id)


wtbproj01 = Project.create!(title: "How to use:", creator_id: user01.id, team_id: team01.id, index: 0)
wtbproj02 = Project.create!(title: "More uses:", creator_id: user01.id, team_id: team01.id, index: 1)

wtbtask01 = Task.create!(title: "Click into the + create input fields to write Team and Project names, as well as Task descriptions.", details: "details", project_id: wtbproj01.id, team_id: wtbproj01.team_id, index: 0)
wtbtask02 = Task.create!(title: "Mark Tasks completed by clicking the check box to the left end of the Task box.", details: "details", project_id: wtbproj01.id, team_id: wtbproj01.team_id, index: 1)
wtbtask03 = Task.create!(title: "Tasks can be deleted with the x button on the right end of the Task box.", details: "details", project_id: wtbproj01.id, team_id: wtbproj01.team_id, index: 2)

wtbtask04 = Task.create!(title: "Projects can be dragged and dropped into a new order.", details: "details", project_id: wtbproj02.id, team_id: wtbproj02.team_id, index: 0)
wtbtask05 = Task.create!(title: "You can also try to drag and drop Tasks both to reorder them and move them to a different Project!.", details: "details", project_id: wtbproj02.id, team_id: wtbproj02.team_id, index: 1)
wtbtask05 = Task.create!(title: "Looks like this Task is already completed!", details: "details", project_id: wtbproj02.id, team_id: wtbproj02.team_id, index: 2, checked: true)

proj01 = Project.create!(title: "Primary Project", creator_id: user01.id, team_id: team02.id, index: 0)
proj02 = Project.create!(title: "Secondary Project", creator_id: user01.id, team_id: team02.id, index: 1)
proj03 = Project.create!(title: "Tertiary Project", creator_id: user01.id, team_id: team02.id, index: 2)
proj04 = Project.create!(title: "Quaternary Project", creator_id: user01.id, team_id: team02.id, index: 3)

proj05 = Project.create!(title: "Quinary Project", creator_id: user01.id, team_id: team03.id, index: 0)
proj06 = Project.create!(title: "Senary Project", creator_id: user02.id, team_id: team03.id, index: 1)

proj07 = Project.create!(title: "Septenary Project", creator_id: user02.id, team_id: team04.id, index: 0)

task01 = Task.create!(title: "Primary Task", details: "details", project_id: proj01.id, team_id: proj01.team_id, index: 0)
task02 = Task.create!(title: "Secondary Task", details: "details", project_id: proj01.id, team_id: proj01.team_id, index: 1)
task03 = Task.create!(title: "Tertiary Task", details: "details", project_id: proj01.id, team_id: proj01.team_id, index: 2)

task04 = Task.create!(title: "Quaternary Task", details: "details", project_id: proj05.id, team_id: proj05.team_id, index: 0)
task05 = Task.create!(title: "Quinary Task", details: "details", project_id: proj05.id, team_id: proj05.team_id, index: 1)
task06 = Task.create!(title: "Senary Task", details: "details", project_id: proj05.id, team_id: proj05.team_id, index: 2)
task07 = Task.create!(title: "Septenary Task", details: "details", project_id: proj05.id, team_id: proj05.team_id, index: 3)
task08 = Task.create!(title: "Octonary Task", details: "details", project_id: proj05.id, team_id: proj05.team_id, index: 4)

task09 = Task.create!(title: "Primary Task", details: "details", project_id: proj02.id, team_id: proj02.team_id, index: 0)

task10 = Task.create!(title: "Secondary Task", details: "details", project_id: proj03.id, team_id: proj03.team_id, index: 0)
task11 = Task.create!(title: "Tertiary Task", details: "details", project_id: proj03.id, team_id: proj03.team_id, index: 1)

task12 = Task.create!(title: "Quaternary Task", details: "details", project_id: proj04.id, team_id: proj04.team_id, index: 0)
task13 = Task.create!(title: "Quinary Task", details: "details", project_id: proj04.id, team_id: proj04.team_id, index: 1)

task14 = Task.create!(title: "Senary Task", details: "details", project_id: proj06.id, team_id: proj06.team_id, index: 0)
task15 = Task.create!(title: "Septenary Task", details: "details", project_id: proj06.id, team_id: proj06.team_id, index: 1)
task16 = Task.create!(title: "Octonary Task", details: "details", project_id: proj07.id, team_id: proj07.team_id, index: 1)

mem01 = Membership.create!(user_id: user01.id, team_id: team01.id)
mem02 = Membership.create!(user_id: user01.id, team_id: team02.id)
mem03 = Membership.create!(user_id: user01.id, team_id: team03.id)
mem04 = Membership.create!(user_id: user01.id, team_id: team04.id)
mem04 = Membership.create!(user_id: user01.id, team_id: team05.id)

mem05 = Membership.create!(user_id: user02.id, team_id: team01.id)
mem05 = Membership.create!(user_id: user02.id, team_id: team02.id)
mem05 = Membership.create!(user_id: user02.id, team_id: team05.id)

mem05 = Membership.create!(user_id: user03.id, team_id: team05.id)
mem05 = Membership.create!(user_id: user04.id, team_id: team05.id)
