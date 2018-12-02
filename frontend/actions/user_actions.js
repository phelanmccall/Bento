import * as APIUtil from '../util/user_api_util';

export const  RECEIVE_USERS  =  'RECEIVE_USERS';
export const  RECEIVE_USER   =  'RECEIVE_USER';

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const fetchAllUsers = () => (dispatch) => {
  return APIUtil.fetchAllUsers().then(
    resp => dispatch(receiveUsers(resp))
  )
}

export const createUser = (user) => (dispatch) => {
  return APIUtil.createUser(user).then(
    resp => dispatch(receiveUser(resp))
  )
}

export const fetchUser = (user) => (dispatch) => {
  return APIUtil.fetchUser(user).then(
    resp => dispatch(receiveUser(resp))
  )
}

export const updateUser = (user) => (dispatch) => {
  return APIUtil.updateUser(user).then(
    resp => dispatch(receiveUser(resp))
  )
}
