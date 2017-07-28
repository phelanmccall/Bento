export const createMembership = (membership) => {
  return $.ajax({
    method: 'POST',
    url: '/api/memberships',
    dataType: 'JSON',
    data: {
      membership: {
        team_id: membership.team_id,
        user_id: membership.user_id
      }
    }
  });
};
