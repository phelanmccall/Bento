import * as APIUtil from '../util/team_api_util';

export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const RECEIVE_TEAM =
'RECEIVE_TEAM';
export const DELETE_TEAM =
'DELETE_TEAM';
export const CLEAR_TEAMS =
'CLEAR_TEAMS';

export const receiveTeams = (teams) => {
  return {
    type: RECEIVE_TEAMS,
    teams
  }
}

export const receiveTeam = (team) => {
  return {
    type: RECEIVE_TEAM,
    team
  }
}

export const deleteTeam = (id) => {
  return {
    type: DELETE_TEAM,
    id
  }
}

export const clearTeams = () => {
  return {
    type: CLEAR_TEAMS
  }
}

export const fetchAllTeams = (user_id) => (dispatch) => {
  return APIUtil.fetchAllTeams(user_id).then(
    resp => dispatch(receiveTeams(resp))
  )
}

export const createTeam = (team) => (dispatch) => {
  return APIUtil.createTeam(team).then(
    resp => dispatch(receiveTeam(resp))
  )
}

export const fetchTeam = (team) => (dispatch) => {
  return APIUtil.fetchTeam(team).then(
    resp => dispatch(receiveTeam(resp))
  )
}

export const updateTeam = (team) => (dispatch) => {
  return APIUtil.updateTeam(team).then(
    resp => dispatch(receiveTeam(resp))
  )
}

export const removeTeam = (id) => (dispatch) => {
  return APIUtil.removeTeam(id).then(
    resp => dispatch(removeTeam(resp.id))
  )
}
