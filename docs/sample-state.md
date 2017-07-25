```js
{
  currentUser: {
    id: 1,
    username: "user",
    email: "email@email.com",
    password_digest: "digest",
    info: "I like to organize my food in bentos.",
    memberships: [team[5], team[6]]
    // a slice that points users to my teams, so if i have a slice i get all the memberships. elliot looking into this.

    //member boolean in the user model. a method called is_member? and takes in team and returns t/f. by going through associations. so if current user is included in this association return true and if not return false. call this method from within json jbuilder for the _user. so when you send back the user with the username and pass and all that, i would also send a key called member, thje value of which would be a method call to is_meber, @user.ismember(team).
    // on front end iterate over teams, render teams where member is true.

    //could also just send out the team itself. on method in model, if current user is on this team return the team.
    // so it goes into teams and if teams has in its members the current user, then send back this team (in the case of the teams index in which we will render all the teams)
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createTask: {errors: ["body can't be blank"]}
  },
  teams: {
    1: {
      id: 1,
      team_name: "Awesome team",
      members: {

      }
    },
    1: {
      id: 1,
      team_name: "Awesome team2",
      members: {

      }
    }
  }
  projects: {
    57: {
	    id: 57,
      title: "Project Proposal",
      description: "has a lot of moving parts"
      team_id: 1,
    }
  },
  tasks: {
    343: {
      id: 343,
      title: "Make plan",
      body: "Plan out all the little things",
      project_id: 343
    }
  }
}
```
