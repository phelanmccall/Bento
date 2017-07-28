import * as APIUtil from '../util/membership_api_util';

export const RECEIVE_MEMBERSHIP = 'RECEIVE_MEMBERSHIP';

export const receiveMembership = (membership) => {
  return {
    type: RECEIVE_MEMBERSHIP,
    membership
  };
};

export const createMembership = (membership) => (dispatch) => {
  return APIUtil.createMembership(membership).then(
    resp => dispatch(receiveMembership(resp))
  );
};
