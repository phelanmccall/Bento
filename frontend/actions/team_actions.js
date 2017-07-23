import * as APIUtil from '../util/team_api_util';

export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';

export const receiveTeams = teams => ({
  type: RECEIVE_TEAMS,
  teams
})
