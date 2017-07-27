import merge from 'lodash/merge';
import { RECEIVE_TEAMS, RECEIVE_TEAM, DELETE_TEAM } from '../actions/team_actions';

const initialState = {
  entities: {},
  currentTeam: undefined
};

const teamsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_TEAMS:
      newState = merge({}, state);

      action.teams.forEach((team) => {
        newState.entities[team.id] = {
          id: team.id,
          owner_id: team.owner_id,
          team_name: team.team_name
        }
      });

      return newState;
    case RECEIVE_TEAM:
      newState = merge({}, state);

      newState.entities[action.team.id] = {
        id: action.team.id,
        owner_id: action.team.owner_id,
        team_name: action.team.team_name
      };

      newState.currentTeam = action.team.id;

      return newState;
    case DELETE_TEAM:
      newState = merge({}, state);

      delete newState.entities[action.id];

      return newState;
    default:
      return state;
  }
};

export default teamsReducer;
