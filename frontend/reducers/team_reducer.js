import merge from 'lodash/merge';
import { RECEIVE_TEAMS, RECEIVE_TEAM, DELETE_TEAM, CLEAR_TEAMS } from '../actions/team_actions';

const initialState = {
  currentTeam: undefined
};

const teamsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_TEAMS:
      newState = {
        currentTeam: undefined
      };

      if (action.teams.length !== 0) {
        action.teams.forEach((team) => {
          newState[team.id] = {
            id:         team.id,
            owner_id:   team.owner_id,
            team_name:  team.team_name
          }
        });
        return newState;
      }
      else {
        return newState;
      }

      return newState;
    case RECEIVE_TEAM:
      newState = merge({}, state);

      newState[action.team.id] = {
        id:         action.team.id,
        owner_id:   action.team.owner_id,
        team_name:  action.team.team_name
      };

      newState.currentTeam = action.team.id;

      return newState;
    case DELETE_TEAM:
      newState = merge({}, state);

      delete newState[action.id];

      return newState;
    case CLEAR_TEAMS:
      return {};
    default:
      return state;
  }
};

export default teamsReducer;
